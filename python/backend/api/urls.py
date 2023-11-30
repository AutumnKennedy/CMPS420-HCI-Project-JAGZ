from django.urls import path
from .views import FileUploadAPIView
from .views import get_file_list

app_name = 'api'
urlpatterns = [
    path('upload-file/', FileUploadAPIView.as_view(), name='upload-file'),
    path('get-edf-file/<str:filename>/', FileUploadAPIView.as_view(), name='get-edf-file'),
    path('get-file-list/', get_file_list, name='get-file-list')
]
