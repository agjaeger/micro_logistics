from django.urls import path

from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView
from micro_logistics_app.views import *

urlpatterns = [
    # path('register/', RegisterView.as_view(), name='register'),
    path('final_project/', FinalProjectView.as_view(), name='final_project'),
]
