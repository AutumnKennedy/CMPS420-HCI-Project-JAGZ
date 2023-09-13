from django.shortcuts import render

# Create your views here.
def index(request, *args, **kwargs):
    return (request, 'frontend/index.html')