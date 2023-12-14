from django.shortcuts import render, redirect

# Create your views here.
# def index():
#     pass

def home (request):
    return render(request, 'main/home.html')

def registration (request):
    return render(request, 'main/registration.html')

def login(request):
    if request.method == 'POST':
        email = request.POST.get('email')  # Отримати значення поля електронної пошти
        password = request.POST.get('password')  # Отримати значення поля пароля
        print('Email:', email)
        print('Пароль:', password)
    return render(request, 'main/registration.html') 

def survey (request):
    return render(request, 'main/survey.html')