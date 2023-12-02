from django.shortcuts import render

# Create your views here.
# def index():
#     pass

def home (request):
    return render(request, 'main/home.html')

def registration (request):
    return render(request, 'main/registration.html')