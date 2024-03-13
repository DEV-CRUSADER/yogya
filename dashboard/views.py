from django.shortcuts import render
from .models import ClientFormData
from django.db import models

# Create your views here.
def submitForm(request):
    if request.method == "POST":
        first_name = request.POST.get('first_name')
        last_name = request.POST.get('last_name')
        phone_number = request.POST.get('phone_number')
        DOB = request.POST.get('DOB')
        email = request.POST.get('email')
        pancard = request.POST.get('pancard')
        current_occupation = request.POST.get('current_occupation')
        salary = request.POST.get('salary')
        current_knowledge = request.POST.get('current_knowledge')
        goals = request.POST.get('goals')
        risk_tolarance_low = request.POST.get('risk_tolarance_low')
        risk_tolarance_mid = request.POST.get('risk_tolarance_mid')
        risk_tolarance_high = request.POST.get('risk_tolarance_high')
        improve = request.POST.get('improve')
        
        client = ClientFormData(
            first_name=first_name,
            last_name=last_name,
            email=email,
            phone_number=phone_number,
            DOB=DOB,
            pancard=pancard,
            current_occupation=current_occupation,
            salary=salary,
            current_knowledge = current_knowledge,
            goals = goals,
            risk_tolarance_low = risk_tolarance_low,
            risk_tolarance_mid = risk_tolarance_mid,
            risk_tolarance_high = risk_tolarance_high,
            improve = improve,
            )
        client.save()
    return render(request, 'dashboard/submitForm.html')