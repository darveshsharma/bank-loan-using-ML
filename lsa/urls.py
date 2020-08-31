from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('loancalc', views.loancalc, name='loancalc'),
    path('answer', views.answer, name='answer'),    
]