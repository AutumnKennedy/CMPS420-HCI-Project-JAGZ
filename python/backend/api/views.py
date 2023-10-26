from rest_framework import status
from rest_framework.parsers import FormParser, MultiPartParser
from rest_framework.response import Response
from rest_framework.views import APIView
from .serializers import FileUploadSerializer
import mne

class FileUploadAPIView(APIView):
    parser_classes = (MultiPartParser, FormParser)
    serializer_class = FileUploadSerializer
    
    def post(self, request, *args, **kwargs):
        serializer = self.serializer_class(data=request.data)
        if serializer.is_valid():
            # you can access the file like this from serializer
            # uploaded_file = serializer.validated_data["file"]
            serializer.save()
            return Response(
                serializer.data,
                status=status.HTTP_201_CREATED
            )
        
        return Response(
            serializer.errors,
            status=status.HTTP_400_BAD_REQUEST
        )

    def get(self, request):
        file_path = 'media\\S001R01.edf'

        try:
            raw = mne.io.read_raw_edf(file_path, preload=True)
            data, times = raw[:, :]     #Get all data and associated times

            x_values = times
            y_values = data[0]      #change this slot as needed to select a new channel

            xy_data = [{"x": x, "y": y} for x, y in zip(x_values, y_values)]

            return Response({"data": xy_data}, status=status.HTTP_200_OK)
        except FileNotFoundError:
            return Response({'error': 'File not found'}, status=status.HTTP_404_NOT_FOUND)
