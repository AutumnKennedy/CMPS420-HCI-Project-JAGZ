from django.urls import path
from .views import FileUploadAPIView
from .views import get_file_list
from .views import run_ica_preprocessing


app_name = 'api'
urlpatterns = [
    path('upload-file/', FileUploadAPIView.as_view(), name='upload-file'),
    path('get-edf-file/<str:filename>/', FileUploadAPIView.as_view(), name='get-edf-file'),
    path('get-file-list/', get_file_list, name='get-file-list'),
    path('run-ica-preprocessing/', run_ica_preprocessing, name='run_ica_preprocessing'),

]
