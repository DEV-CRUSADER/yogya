# from rest_framework.decorators import api_view
# from rest_framework.response import Response
# from .models import FormData
# from .serializers import FormDataSerializer

# @api_view(['POST'])
# def submit_form(request):
#     serializer = FormDataSerializer(data=request.data)
#     if serializer.is_valid():
#         serializer.save()
#         return Response({'message': 'Form submitted successfully!'})
#     else:
#         return Response(serializer.errors, status=400)