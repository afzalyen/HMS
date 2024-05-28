from django.urls import path
from . import views

urlpatterns = [
    # path('', views.doctor_signup, name='doctor-signup'),
    path('api/doctors/signup/', views.doctor_signup, name='doctor-signup'),
    path('api/doctor/login/', views.doctor_login,name='doctor_login'),


   

    
   
]


