from django.urls import path
from .Api import AddUser , UpdateStatus, MyTokenObtainPairView


urlpatterns = [
    path('login/', MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('api/addUser', AddUser.as_view(), name = 'User Sign Up'),
    path('api/updateStatus', UpdateStatus.as_view() , name = 'Update Status'),
]