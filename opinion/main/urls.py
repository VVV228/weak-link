from . import views
from django.urls import path

urlpatterns = [
    # path('', views.index),
    path('home', views.home, name='home'),
    path('registration', views.registration, name='registration'),
    path('survey', views.survey, name='survey'),

]