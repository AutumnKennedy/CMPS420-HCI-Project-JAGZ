import subprocess
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from rest_framework import status
from rest_framework.parsers import FormParser, MultiPartParser
from rest_framework.response import Response
from rest_framework.views import APIView
from django.http import JsonResponse
from .serializers import FileUploadSerializer
import mne
import os

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
        
    def get(self, request, filename):
        file_path = f'media\\{filename}'

        try:
            raw = mne.io.read_raw_edf(file_path, preload=True)
            data, times = raw[:, :]     #Get all data and associated times

            x_values = times
            y_values = data[3]      #change this slot as needed to select a new channel

            xy_data = [{"x": x, "y": y} for x, y in zip(x_values, y_values)]

            return Response({"data": xy_data}, status=status.HTTP_200_OK)
        except FileNotFoundError:
            return Response({'error': 'File not found'}, status=status.HTTP_404_NOT_FOUND)

def get_file_list(request):
    folder_path = "media"
    files = [f for f in os.listdir(folder_path) if os.path.isfile(os.path.join(folder_path, f))]
    return JsonResponse({'files': files})

@csrf_exempt
def run_ica_preprocessing(request):
    try:
        # Set the path to your Python script
        script_path = os.path.join(os.path.dirname(__file__), 'scripts', 'ica.py')

        # Execute the Python script using subprocess
        result = subprocess.run(['python', script_path], capture_output=True, text=True)

        # Return the output in the JSON response
        return JsonResponse({'output': result.stdout})
    except Exception as e:
        # Handle exceptions
        return JsonResponse({'error': str(e)}, status=500)