from django.shortcuts import get_object_or_404
from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.http import JsonResponse
from django.db import transaction
from datetime import datetime
from django.views import View
from .models import Doctor, Patient,  Prescription, Ward, Cabin, Support, BloodDonors,  BloodRecipient, BloodAvailability, TestCharge, TestBill,Appointment
from .serializers import DoctorSerializer, PatientSerializer,  PrescriptionSerializer, WardInfoSerializer, CabinInfoSerializer, SupportSerializer,BloodDonorsSerializer,BloodAvailability, BloodDonors
from .serializers import BloodAvailabilitySerializer, BloodDonorsSerializer, BloodDonorsSerializer, BloodRecipientSerializer, TestChargeSerializer, TestBillSerializer, AppointmentSerializer
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from .models import Appointment
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from datetime import datetime, time, timedelta

@api_view(['POST'])
def doctor_signup(request):
    if request.method == 'POST':
        serializer = DoctorSerializer(data=request.data)
        if serializer.is_valid():
            email = request.data.get('email', '')
            phone = request.data.get('phone', '')
            if Doctor.objects.filter(email=email).exists():
                return Response({'email': 'Email already exists.'}, status=status.HTTP_400_BAD_REQUEST)
            if Doctor.objects.filter(phone=phone).exists():
                return Response({'phone': 'Phone number already exists.'}, status=status.HTTP_400_BAD_REQUEST)
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
@api_view(['POST'])
def doctor_login(request):
    email = request.data.get('email')
    password = request.data.get('password')
    try:
        doctor = get_object_or_404(Doctor, email=email, password=password)
    except Doctor.DoesNotExist:
        return Response({'error': 'Invalid credentials'}, status=status.HTTP_401_UNAUTHORIZED)
    serializer = DoctorSerializer(doctor)
    return Response(serializer.data)

@api_view(['POST'])
def patient_signup(request):
    if request.method == 'POST':
        serializer = PatientSerializer(data=request.data)
        if serializer.is_valid():
            email = request.data.get('email', '')
            phone = request.data.get('phone', '')
            if Patient.objects.filter(email=email).exists():
                return Response({'email': 'Email already exists.'}, status=status.HTTP_400_BAD_REQUEST)
            if Patient.objects.filter(phone=phone).exists():
                return Response({'phone': 'Phone number already exists.'}, status=status.HTTP_400_BAD_REQUEST)
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['POST'])
def patient_login(request):
    email = request.data.get('email')
    password = request.data.get('password')
    try:
        patient = get_object_or_404(Patient, email=email, password=password)
    except Patient.DoesNotExist:
        return Response({'error': 'Invalid credentials'}, status=status.HTTP_401_UNAUTHORIZED)
    serializer = PatientSerializer(patient)
    return Response(serializer.data)

@api_view(['GET'])
def get_doctor_by_email(request):
    email = request.GET.get('email')
    doctor = get_object_or_404(Doctor, email=email)
    serializer = DoctorSerializer(doctor)
    return Response(serializer.data)

@api_view(['GET'])
def get_patient_by_email(request):
    email = request.GET.get('email')
    patient = get_object_or_404(Patient, email=email)
    serializer = PatientSerializer(patient)
    return Response(serializer.data)

@api_view(['POST'])
def create_prescription(request):
    serializer = PrescriptionSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET'])
def get_patient_prescriptions(request):
    patient_email = request.GET.get('patient_email')
    doctor_identifier = request.GET.get('doctor_identifier', '') 
    if '@' in doctor_identifier:  
        prescriptions = Prescription.objects.filter(patient_email=patient_email, doctor_email__icontains=doctor_identifier)
    else:
        prescriptions = Prescription.objects.filter(patient_email=patient_email, doctor_name__icontains=doctor_identifier)
    serializer = PrescriptionSerializer(prescriptions, many=True)
    return Response(serializer.data)
@api_view(['GET'])
def get_doctor_prescriptions(request):
    doctor_email = request.GET.get('doctor_email')
    patient_identifier = request.GET.get('patient_identifier', '') 
    if '@' in patient_identifier:  
        prescriptions = Prescription.objects.filter(doctor_email=doctor_email, patient_email__icontains=patient_identifier)
    else:
        prescriptions = Prescription.objects.filter(doctor_email=doctor_email, patient_name__icontains=patient_identifier)
    serializer = PrescriptionSerializer(prescriptions, many=True)
    return Response(serializer.data)

@api_view(['PUT'])
def update_doctor_profile(request):
    email = request.data.get('email')
    try:
        doctor = get_object_or_404(Doctor, email=email)
    except Doctor.DoesNotExist:
        return Response({'error': 'Doctor not found'}, status=status.HTTP_404_NOT_FOUND)

    serializer = DoctorSerializer(doctor, data=request.data, partial=True)
    if serializer.is_valid():
        serializer.save()
        return JsonResponse({'message': 'Doctor profile updated successfully'})
    return JsonResponse(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['POST'])
def create_support(request):
    serializer = SupportSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response({'success': 'Support submitted successfully'}, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET'])
def get_available_wards(request):
    wards = Ward.objects.filter(booked_by=None)
    serializer = WardInfoSerializer(wards, many=True)
    return Response(serializer.data)

@api_view(['POST'])
@transaction.atomic
def book_ward(request):
    data = request.data
    ward_no = data.get('wardNo')
    booked_date = datetime.strptime(data.get('bookedDate'), '%Y-%m-%d').date()  
    try:
        ward = Ward.objects.get(ward_no=ward_no, booked_by=None)
        ward.booked_by = data.get('name')
        ward.email = data.get('email')
        ward.total_days = int(data.get('totalDays'))
        ward.total_bill = ward.total_days * 1100  
        ward.booked_date = booked_date 
        ward.save()  
        return Response({'message': 'Ward booked successfully.', 'ward_no': ward_no})
    except Ward.DoesNotExist:
        return Response({'detail': 'Ward not available or already booked.'}, status=status.HTTP_400_BAD_REQUEST)
    
@api_view(['GET'])
def get_available_cabins(request):
    cabins = Cabin.objects.filter(booked_by=None)
    serializer = CabinInfoSerializer(cabins, many=True)
    return Response(serializer.data)

@api_view(['POST'])
def book_cabin(request):
    data = request.data
    cabin_no = data.get('cabinNo')
    booked_date = datetime.strptime(data.get('bookedDate'), '%Y-%m-%d').date()  
    try:
        cabin = Cabin.objects.get(cabin_no=cabin_no, booked_by=None)
        cabin.booked_by = data.get('name')
        cabin.email = data.get('email')
        cabin.total_days = int(data.get('totalDays'))
        cabin_type = cabin.cabin_type
        if cabin_type == 'Single':
            cabin.total_bill = cabin.total_days * 2000
        elif cabin_type == 'Double':
            cabin.total_bill = cabin.total_days * 2500
        cabin.booked_date = booked_date  
        cabin.save()
        return Response({'message': 'Cabin booked successfully.', 'cabin_no': cabin_no})
    except Cabin.DoesNotExist:
        return Response({'detail': 'Cabin not available or already booked.'}, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET'])
def get_patient_ward_bills(request):
    patient_email = request.GET.get('patient_email')
    ward_bills = Ward.objects.filter(email=patient_email, booked_by__isnull=False)
    serializer = WardInfoSerializer(ward_bills, many=True)
    serialized_data = serializer.data
    return Response(serialized_data)

@api_view(['GET'])
def get_patient_cabin_bills(request):
    patient_email = request.GET.get('patient_email')
    cabin_bills = Cabin.objects.filter(email=patient_email, booked_by__isnull=False)
    serializer = CabinInfoSerializer(cabin_bills, many=True)
    serialized_data = serializer.data
    return Response(serialized_data)

@api_view(['GET'])
def get_doctor_info(request, department):
    try:
        doctors = Doctor.objects.filter(department=department)
        serializer = DoctorSerializer(doctors, many=True)
        return Response(serializer.data)
    except Doctor.DoesNotExist:
        return Response({'error': 'Doctors not found for the selected department.'}, status=status.HTTP_404_NOT_FOUND)

@api_view(['GET'])
def get_all_doctors(request):
    doctors = Doctor.objects.all()
    serializer = DoctorSerializer(doctors, many=True)
    return Response(serializer.data)
def get_patients(request):
    patients = Patient.objects.all().values(
        'first_name', 'last_name', 'email', 'phone', 'bloodGroup'
    )
    return JsonResponse({'patients': list(patients)}, safe=False)

# @api_view(['POST'])
# def blood_donors_signup(request):
#     if request.method == 'POST':
#         serializer = BloodDonorsSerializer(data=request.data)
#         if serializer.is_valid():
#             # email = request.data.get('email', '')
#             # phone = request.data.get('phone', '')
#             # if BloodDonors.objects.filter(email=email).exists():
#             #     return Response({'email': 'Email already exists.'}, status=status.HTTP_400_BAD_REQUEST)
#             # if BloodDonors.objects.filter(phone=phone).exists():
#             #     return Response({'phone': 'Phone number already exists.'}, status=status.HTTP_400_BAD_REQUEST)
#             serializer.save()
#             update_blood_availability() 
#             return Response(serializer.data, status=status.HTTP_201_CREATED)
#         return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from datetime import datetime, timedelta
from .models import BloodDonors
from .serializers import BloodDonorsSerializer
  # Assuming you have a utility function for updating blood availability

@api_view(['POST'])
def blood_donors_signup(request):
    if request.method == 'POST':
        serializer = BloodDonorsSerializer(data=request.data)
        
        if serializer.is_valid():
            email = serializer.validated_data.get('email', '')
            phone = serializer.validated_data.get('phone', '')
            
            # You may want to add additional logic here to check for duplicate email/phone if needed
            
            # Check for the last donation date logic
            last_donation_date = serializer.validated_data.get('last_donation_date', None)
            if last_donation_date:
                today = datetime.now().date()
                three_months_ago = today - timedelta(days=90)  # 3 months ago
                if last_donation_date > three_months_ago:
                    return Response({'error': 'You cannot donate blood within 3 months of your last donation.'},
                                    status=status.HTTP_400_BAD_REQUEST)
            
            serializer.save()
            update_blood_availability()
            
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


# Add the rest of your views and functions as before


# @api_view(['POST'])
# def blood_recipient_request(request):
#     if request.method == 'POST':
#         serializer = BloodRecipientSerializer(data=request.data)
#         if serializer.is_valid():
#             blood_group = request.data.get('blood_group', '')
#             bags_needed = int(request.data.get('bags_needed', 0))  
#             blood_availability = BloodAvailability.objects.filter(blood_group=blood_group).first()
#             if blood_availability is None or blood_availability.total_bags < bags_needed:
#                 return Response({'error': 'Not enough bags available for the requested blood group.'}, status=status.HTTP_400_BAD_REQUEST)
#             blood_availability.total_bags -= bags_needed
#             blood_availability.save()
#             serializer.save()
#             return Response(serializer.data, status=status.HTTP_201_CREATED)
#         return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
@api_view(['POST'])
def blood_recipient_request(request):
    if request.method == 'POST':
        serializer = BloodRecipientSerializer(data=request.data)
        if serializer.is_valid():
            blood_group = request.data.get('blood_group', '')
            bags_needed = int(request.data.get('bags_needed', 0))
            
            blood_availability = BloodAvailability.objects.filter(blood_group=blood_group).first()
            
            if blood_availability is None:
                return Response({'error': 'Invalid blood group.'}, status=status.HTTP_400_BAD_REQUEST)
            
            if blood_availability.total_bags < bags_needed:
                return Response({'error': 'Not enough bags available for the requested blood group.'}, status=status.HTTP_400_BAD_REQUEST)
            
            serializer.save()
            blood_availability.total_bags -= bags_needed
            blood_availability.save()
            
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
@api_view(['GET'])
def get_blood_donors(request):
    blood_donors = BloodDonors.objects.all()
    serializer = BloodDonorsSerializer(blood_donors, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def get_blood_availability(request):
    blood_availability = BloodAvailability.objects.all()
    serializer = BloodAvailabilitySerializer(blood_availability, many=True)
    return Response(serializer.data)

def update_blood_availability():
    blood_groups = BloodDonors.objects.values('blood_group').distinct()
    for group in blood_groups:
        count = BloodDonors.objects.filter(blood_group=group['blood_group']).count()
        blood_availability = BloodAvailability.objects.get(blood_group=group['blood_group'])
        blood_availability.total_bags = count
        blood_availability.save()

@api_view(['GET'])
def patient_blood_details(request):
    """
    View to get blood bank details.
    """
    patients = Patient.objects.all()
    serializer = PatientSerializer(patients, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def get_test_charge(request):
    test_charge = TestCharge.objects.all()
    serializer = TestChargeSerializer(test_charge, many=True)
    return Response(serializer.data)

@api_view(['POST'])
def create_test_bill(request):
    serializer = TestBillSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET'])
def get_departments(request):
    departments = Doctor.objects.values_list('department', flat=True).distinct()
    return Response(departments)



@api_view(['GET'])
def get_test_bills(request):
    if request.method == 'GET':
        patient_email = request.GET.get('patient_email', None)

        if not patient_email:
            return Response({'error': 'Patient email is required.'}, status=status.HTTP_400_BAD_REQUEST)

        test_bills = TestBill.objects.filter(patient_email=patient_email)
        serializer = TestBillSerializer(test_bills, many=True)
        return Response(serializer.data)


@api_view(['PUT'])
def update_patient_profile(request):
    email = request.data.get('email')
    try:
        patient = get_object_or_404(Patient, email=email)
    except Patient.DoesNotExist:
        return Response({'error': 'Patient not found'}, status=status.HTTP_404_NOT_FOUND)

    serializer = PatientSerializer(patient, data=request.data, partial=True)
    if serializer.is_valid():
        serializer.save()
        return JsonResponse({'message': 'Patient profile updated successfully'})
    return JsonResponse(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET'])
def search_patient(request):
    search_query = request.query_params.get('query', '')
    
    if not search_query:
        return Response({'error': 'Search query parameter is required'}, status=400)
    
    patients = Patient.objects.filter(first_name__icontains=search_query) | Patient.objects.filter(last_name__icontains=search_query) | Patient.objects.filter(email__icontains=search_query)

    if not patients.exists():
        return Response({'message': 'No matching patients found'})

    serializer = PatientSerializer(patients, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def blood_donors_details(request):
    if request.method == 'GET':
        blood_donors = BloodDonors.objects.all()
        serializer = BloodDonorsSerializer(blood_donors, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)


@api_view(['GET'])
def search_doctors(request):
    search_term = request.query_params.get('searchTerm', '')

    if search_term:
        doctors = Doctor.objects.filter(
            first_name__icontains=search_term
        ) | Doctor.objects.filter(
            last_name__icontains=search_term
        )
    else:
        doctors = Doctor.objects.all()

    serializer = DoctorSerializer(doctors, many=True)
    return Response(serializer.data, status=status.HTTP_200_OK)




@api_view(['POST'])
def create_appointment(request):
    if request.method == 'POST':
        data = request.data
        serializer = AppointmentSerializer(data=data)

        if serializer.is_valid():
            # Extract date and time from the incoming data
            appointment_date = data.get('appointment_date')
            appointment_time = data.get('appointment_time')
            appointment_time = appointment_time[0:5]+":00"

            appointment_date = datetime.strptime(appointment_date, "%Y-%m-%d").date()
            appointment_time = datetime.strptime(appointment_time, "%H:%M:%S").time()

            # Combine date and time to create a datetime object
            appointment_datetime = datetime.combine(appointment_date, appointment_time)

            # Check if an appointment already exists for the specified date and time
            existing_appointment = Appointment.objects.filter(
                appointment_datetime=appointment_datetime,
                doctor_email=data.get('doctor_email')
            ).first()

            if existing_appointment:
                return Response({'error': 'Appointment slot already booked for the specified date, time, and doctor'}, status=status.HTTP_400_BAD_REQUEST)

            serializer.save()

            return JsonResponse({'message': 'Appointment created successfully'})
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    return Response({'error': 'Invalid request method'}, status=status.HTTP_405_METHOD_NOT_ALLOWED)


@api_view(['GET'])
def get_doctor_appointments(request):
    doctor_email = request.GET.get('doctor_email')
    appointments = Appointment.objects.filter(doctor_email=doctor_email)
    serializer = AppointmentSerializer(appointments, many=True)
    return Response(serializer.data)


@api_view(['GET'])
def get_patient_appointments(request):
    patient_email = request.GET.get('patient_email')
    appointments = Appointment.objects.filter(patient_email=patient_email)
    serializer = AppointmentSerializer(appointments, many=True)
    return Response(serializer.data)






