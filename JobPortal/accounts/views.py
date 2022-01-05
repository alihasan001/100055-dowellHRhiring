"""from django.shortcuts import render

# Create your views here.

# FUNCTIONS FPR RENDERING HTML TEMPLATES (TO BE DELETED WHILE MOVING TO REACTJS)
from django.http.response import HttpResponseRedirect
from django.contrib.auth import authenticate, login, logout
from .forms import LoginForm
from django.shortcuts import render, redirect
from django.contrib.auth.decorators import login_required

def login_view(request, *args, **kwargs):
    form = LoginForm(request.POST or None)
    if request.POST and form.is_valid():
        user = form.login(request)
        if user:
            login(request, user)
            return HttpResponseRedirect("/candidate-view/")
    return render(request, 'candidate-view/login.html', {'form':form})



def logout_view(request, *args, **kwargs):
    logout(request)
    return HttpResponseRedirect("/auth/login/")


@login_required(login_url='/login/')
def candidate_view(request, *args, **kwargs):
    return render(request, "candidate-view/candidate.html")"""