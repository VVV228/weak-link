from django.shortcuts import render, redirect
from main.serializers import UserSerializer
from main.models import User
from django.db.models import Q

def home(request):
    return render(request, 'main/home.html')

def registration(request):
    if request.method == 'GET':
        email_error = request.GET.get('email_error', '')
        error = request.GET.get('error', '')
        reg = request.GET.get('reg', '')
        data = {
            'email_error': email_error,
            'error': error,
            'reg': 'true' if reg == 'reg' else ''
        }
        return render(request, 'main/registration.html', data)

    elif request.method == 'POST':
        serializer = UserSerializer(data=request.POST)
        if not serializer.is_valid(raise_exception=False):
            print(serializer.errors)
            return redirect('/registration&reg=reg')

        if User.objects.filter(email=serializer.validated_data['email']).exists():
            return redirect('/registration?email_error=Email already exists&reg=reg')

        user = serializer.save()
        print(user)
        return redirect('/registration')
        
def login(request):
    if request.method == 'POST':
        serializer = UserSerializer(data=request.POST)
        if not serializer.is_valid(raise_exception=False):
            print(serializer.errors)
            return redirect('/registration')
        user = User.objects.filter((Q(email=serializer.validated_data['email'])) & Q(password=serializer.validated_data['password']))

        if user.exists():
            user = user.get()
            print(user)
        else:
            return redirect('/registration?error=Email or password not correct')

    return redirect('/registration')

def survey (request):
    return render(request, 'main/survey.html')