from django.db import models

# Create your models here.
class Doctor(models.Model):
    class Meta:
        db_table = 'doctors'
    first_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100)
    sex = models.CharField(max_length=6, choices=[('Male', 'Male'), ('Female', 'Female')])
    dob = models.DateField()
    email = models.EmailField(unique=True)
    phone = models.CharField(max_length=15, unique=True)
    degree = models.CharField(max_length=100)
    medical_college = models.CharField(max_length=200)
    password = models.CharField(max_length=100) 
    speciality = models.CharField(max_length=100, null=True, blank=True)
    department = models.CharField(max_length=100, null=True, blank=True)
    availability = models.CharField(max_length=255, null=True, blank=True)
    fields = [
    'first_name',
    'last_name',
    'sex',
    'dob',
    'email',
    'phone',
    'degree',
    'medical_college',
    'password'
    'speciality'
    'department'
    'availability'
]   
    def __str__(self):
        return self.fields

# class Patient(models.Model):
#     class Meta:
#         db_table = 'patient'
#     first_name = models.CharField(max_length=100)
#     last_name = models.CharField(max_length=100)
#     sex = models.CharField(max_length=6, choices=[('Male', 'Male'), ('Female', 'Female')])
#     dob = models.DateField()
#     email = models.EmailField(unique=True)
#     phone = models.CharField(max_length=15, unique=True)
#     bloodGroup = models.CharField(max_length=100)
#     password = models.CharField(max_length=100)  
#     fields = [
#     'first_name',
#     'last_name',
#     'sex',
#     'dob',
#     'email',
#     'phone',
#     'bloodGroup',
#     'password'
# ]
#     def __str__(self):
#         return self.fields
class Patient(models.Model):
    class Meta:
        db_table = 'patient'

    first_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100)
    sex = models.CharField(max_length=6, choices=[('Male', 'Male'), ('Female', 'Female')])
    dob = models.DateField()
    email = models.EmailField(unique=True)
    phone = models.CharField(max_length=15, unique=True)
    bloodGroup = models.CharField(max_length=100)
    password = models.CharField(max_length=100)
    age = models.IntegerField(blank=True, null=True)
    pain_difficulty = models.CharField(max_length=255, blank=True, null=True)
    been_diagnosed = models.CharField(max_length=255, blank=True, null=True)
    description = models.TextField(blank=True, null=True)

    def __str__(self):
        return self.email

class Prescription(models.Model):
    class Meta:
        db_table = 'prescription'
    # doctor_name = models.CharField(max_length=100)
    doctor_name = models.CharField(max_length=255, default='Default Doctor Name')
    # doctor_email = models.EmailField()
    doctor_email = models.EmailField(default='example@example.com')
    patient_name = models.CharField(max_length=100)
    patient_number = models.CharField(max_length=15)
    patient_email = models.EmailField()
    description = models.TextField()
    age = models.IntegerField()
    sex = models.CharField(max_length=6, choices=[('Male', 'Male'), ('Female', 'Female'), ('Other', 'Other')])
    date = models.DateField()
    def __str__(self):
        return f"Prescription for {self.patient_name} by {self.doctor_name}"
     
class Ward(models.Model):
    class Meta:
        db_table="wards"
    ward_no = models.CharField(max_length=50)
    floor_no = models.CharField(max_length=50)
    booked_by = models.CharField(max_length=100, blank=True, null=True)
    email = models.EmailField(blank=True, null=True)
    total_days = models.IntegerField()
    total_bill = models.DecimalField(max_digits=10, decimal_places=2, blank=True, null=True)
    booked_date = models.DateField(auto_now_add=True)
    ward_type = models.CharField(max_length=50)
    def __str__(self):
        return f"Ward {self.ward_no}"
    
class Cabin(models.Model):
    class Meta:
        db_table = 'cabins'
    CABIN_TYPES = [
        ('Single', 'Single'),
        ('Double', 'Double'),
    ]
    cabin_no = models.CharField(max_length=50, unique=True)
    floor_no = models.CharField(max_length=50)
    booked_by = models.CharField(max_length=100, blank=True, null=True)
    email = models.EmailField(blank=True, null=True)
    total_days = models.IntegerField()
    total_bill = models.DecimalField(max_digits=10, decimal_places=2, blank=True, null=True)
    booked_date = models.DateField(auto_now_add=True)
    cabin_type = models.CharField(max_length=50, choices=CABIN_TYPES)
    def __str__(self):
        return f"Cabin {self.cabin_no}"
    
class Support(models.Model):
    class Meta:
        db_table = "supports"
    name = models.CharField(max_length=255)
    phone = models.IntegerField()
    email = models.EmailField()
    message = models.TextField()
    def __str__(self):
        return f"Message from Admin to {self.email}"
    
class BloodAvailability(models.Model):
    class Meta:
        db_table = "blood_availability"
    blood_group = models.CharField(max_length=5, unique=True)
    total_bags = models.PositiveIntegerField(default=0)
    def __str__(self):
        return f"{self.blood_group} - {self.total_bags}"

class BloodDonors(models.Model):
    class Meta:
        db_table = "blooddonors"
    first_name = models.CharField(max_length=255)
    last_name = models.CharField(max_length=255)
    phone = models.CharField(max_length=15)
    email = models.EmailField()
    blood_group = models.CharField(max_length=5)
    dob = models.DateField()
    sex = models.CharField(max_length=10)
    address = models.TextField()
    previous_donation = models.BooleanField(default=False)
    last_donation_date = models.DateField(null=True, blank=True)

    def __str__(self):
        return f"{self.first_name} {self.last_name}"

class BloodRecipient(models.Model):
    class Meta:
        db_table="bloodrecipient"
    name = models.CharField(max_length=255)
    phone = models.CharField(max_length=15)
    email = models.EmailField()
    blood_group = models.CharField(max_length=5)
    bags_needed = models.PositiveIntegerField()

    def __str__(self):
        return f"{self.name} - {self.blood_group} - {self.bags_needed} bags needed"

class TestCharge(models.Model):
    class Meta:
        db_table= "testcharge"
    service_name = models.CharField(max_length=255, unique=True)
    price = models.DecimalField(max_digits=10, decimal_places=2)

    def __str__(self):
        return f"{self.service_name} - ${self.price}"

class TestBill(models.Model):
    class Meta:
        db_table="test_bill"
    doctor_name = models.CharField(max_length=255)
    doctor_email = models.EmailField()
    patient_name = models.CharField(max_length=255)
    patient_email = models.EmailField()
    test_name = models.JSONField()
    total_bill = models.DecimalField(max_digits=10, decimal_places=2)
    def __str__(self):
        return f"Test Bill - {self.doctor_name} - {self.patient_name} - ${self.total_bill}"




class Appointment(models.Model):
    class Meta:
        db_table="appointment"
    department = models.CharField(max_length=100)
    doctor_email = models.CharField(max_length=100)
    appointment_date= models.DateField(default='2023-01-01')
    appointment_time= models.TimeField(default='00:00:00')
    appointment_datetime = models.DateTimeField()
    day = models.CharField(max_length=20)
    patient_name = models.CharField(max_length=100)
    patient_email = models.EmailField()
    

    def __str__(self):
        return f"Appointment for {self.patient_name} with Dr. {self.doctor_email} on {self.date} at {self.time_slot}"