# from django.contrib import admin

# # Register your models here.
# from django.contrib import admin
# from .models import Doctor, Patient, Support

# @admin.register(Doctor)
# class DoctorAdmin(admin.ModelAdmin):
#     list_display = ['first_name', 'last_name','sex','dob' ,'email', 'phone',"speciality","department"]

# @admin.register(Patient)
# class PatientAdmin(admin.ModelAdmin):
#     list_display = ['first_name', 'last_name','sex','dob', 'email', 'phone']
from django.contrib import admin
from .models import Doctor, Patient, Prescription, Ward, Cabin, Support

@admin.register(Doctor)
class DoctorAdmin(admin.ModelAdmin):
    list_display = ['first_name', 'last_name', 'sex', 'dob', 'email', 'phone', "speciality", "department"]

@admin.register(Patient)
class PatientAdmin(admin.ModelAdmin):
    list_display = ['first_name', 'last_name', 'sex', 'dob', 'email', 'phone']

# @admin.register(Prescription)
# class PrescriptionAdmin(admin.ModelAdmin):
#     list_display = ['doctor_name', 'doctor_email', 'patient_name', 'patient_number', 'patient_email', 'description', 'age', 'sex', 'date']

@admin.register(Ward)
class WardAdmin(admin.ModelAdmin):
    list_display = ['ward_no', 'floor_no', 'booked_by', 'email', 'total_days', 'total_bill', 'booked_date', 'ward_type']

@admin.register(Cabin)  # Register the Cabin model
class CabinAdmin(admin.ModelAdmin):
    list_display = ['cabin_no', 'floor_no', 'booked_by', 'email', 'total_days', 'total_bill', 'booked_date', 'cabin_type']
    
@admin.register(Support)
class SupportAdmin(admin.ModelAdmin):
    list_display = ['name', 'phone', 'email', 'message']

from django.contrib import admin
from .models import BloodAvailability, BloodDonors, BloodRecipient, TestCharge

class BloodAvailabilityAdmin(admin.ModelAdmin):
    list_display = ['blood_group', 'total_bags']
    search_fields = ['blood_group']

admin.site.register(BloodAvailability, BloodAvailabilityAdmin)

class BloodDonorsAdmin(admin.ModelAdmin):
    list_display = ['first_name', 'last_name', 'phone', 'email', 'blood_group', 'dob', 'sex', 'previous_donation', 'last_donation_date']
    search_fields = ['first_name', 'last_name', 'phone', 'email', 'blood_group']

admin.site.register(BloodDonors, BloodDonorsAdmin)

class BloodRecipientAdmin(admin.ModelAdmin):
    list_display = ['name', 'phone', 'email', 'blood_group', 'bags_needed']
    search_fields = ['name', 'phone', 'email', 'blood_group']

admin.site.register(BloodRecipient, BloodRecipientAdmin)

class TestChargeAdmin(admin.ModelAdmin):
    list_display = ['service_name', 'price']
    search_fields = ['service_name']

admin.site.register(TestCharge, TestChargeAdmin)
from django.contrib import admin
from .models import Appointment

class AppointmentAdmin(admin.ModelAdmin):
    list_display = ['department', 'doctor_email', 'appointment_date', 'appointment_time', 'patient_name', 'patient_email']
    search_fields = ['department', 'doctor_email', 'patient_name', 'patient_email']

    def has_delete_permission(self, request, obj=None):
        return False  # Disable delete permission for Appointment instances

    def save_model(self, request, obj, form, change):
        # Ensure the appointment_datetime is correctly set based on date and time fields
        obj.appointment_datetime = obj.appointment_date + obj.appointment_time
        super().save_model(request, obj, form, change)

admin.site.register(Appointment, AppointmentAdmin)
