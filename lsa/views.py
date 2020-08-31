from django.shortcuts import render
from django.http import HttpResponse
import joblib
loadmodel=joblib.load('./models/RFModelloan.pkl')
# Create your views here.
def index(request):
    return render(request,'index.html')

def loancalc(request):
    return render(request,'loancalc.html')

def answer(request):
    val1=request.GET["income"]
    val2=request.GET["cincome"]
    val3=request.GET["loanamount"]
    val4=request.GET["term"]
    val5=request.GET["CH"]
    ans= loadmodel.predict([[val1,val2,val3,val4,val5]])[0]

    return render(request,'answer.html',{'ans':ans})