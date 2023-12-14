from django.shortcuts import render, redirect

# Create your views here.
# def index():
#     pass

def home (request):
    return render(request, 'main/home.html')

def registration (request):
    return render(request, 'main/registration.html')

def login (request):
    if request.method == 'POST':
        print('post')
    return redirect('/registration')

def survey (request):
    return render(request, 'main/survey.html')