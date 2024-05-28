from rest_framework import serializers
from .models import Doctor, Patient, Prescription, Ward, Cabin, Support, BloodDonors, BloodRecipient,BloodAvailability, TestBill, TestCharge, Appointment



class AppointmentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Appointment
        fields = '__all__'



class DoctorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Doctor
        fields = [
            'first_name', 'last_name', 'sex', 'dob', 'email', 'phone', 
            'degree', 'medical_college', 'password', 'speciality', 'department','availability'
        ]

# class PatientSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = Patient
#         # fields = '__all__'
#         fields = [
#             'first_name',
#             'last_name',
#             'sex',
#             'dob',
#             'email',
#             'phone',
#             'bloodGroup',
#             'password']
class PatientSerializer(serializers.ModelSerializer):
    class Meta:
        model = Patient
        fields = [
            'first_name',
            'last_name',
            'sex',
            'dob',
            'email',
            'phone',
            'bloodGroup',
            'password',
            'age',
            'pain_difficulty',
            'been_diagnosed',
            'description'
        ]

class PrescriptionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Prescription
        fields = '__all__'

class WardInfoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Ward
        fields = ['ward_no', 'floor_no', 'ward_type', 'total_days', 'total_bill', 'booked_date', 'booked_by', 'email']

class CabinInfoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Cabin
        fields = ['cabin_no', 'floor_no', 'cabin_type', 'total_days', 'total_bill', 'booked_date', 'booked_by', 'email']

class SupportSerializer(serializers.ModelSerializer):
    class Meta:
        model = Support
        fields = ['id', 'name', 'phone', 'email', 'message']

class BloodAvailabilitySerializer(serializers.ModelSerializer):
    class Meta:
        model = BloodAvailability
        fields = '__all__'

class BloodDonorsSerializer(serializers.ModelSerializer):
    class Meta:
        model = BloodDonors
        fields = '__all__'

class BloodRecipientSerializer(serializers.ModelSerializer):
    class Meta:
        model = BloodRecipient
        fields = '__all__'

class TestChargeSerializer(serializers.ModelSerializer):
    class Meta:
        model = TestCharge
        fields = ['service_name', 'price']

class TestBillSerializer(serializers.ModelSerializer):
    class Meta:
        model = TestBill
        fields = ['doctor_name', 'doctor_email', 'patient_name', 'patient_email', 'test_name', 'total_bill']

class TestBillSerializer(serializers.ModelSerializer):
    class Meta:
        model = TestBill
        fields = '__all__'



class AppointmentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Appointment
        fields = '__all__'