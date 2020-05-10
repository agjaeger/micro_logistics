from rest_framework import generics
from rest_framework.permissions import AllowAny
from rest_framework.response import Response
from rest_framework.views import APIView

from micro_logistics_app.models import *
from micro_logistics_app.serializers import *

class RegisterView(generics.CreateAPIView):
    permission_classes = [AllowAny]
    serializer_class = NewUserSerializer

class FinalProjectView (generics.CreateAPIView):
    permission_classes = [AllowAny]
    serializer_class = FinalProjectSerializer

    def post (self, request, *args, **kwargs):
        serializer = self.serializer_class(data=request.data)

        if serializer.is_valid():
            return Response(serializer.validated_data)
        else:
            return Response(serializer.errors)
