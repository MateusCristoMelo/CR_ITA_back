from django.shortcuts import render
from django.http import HttpResponse
from core.serializer import DataSerializer, ContactSerializer
from .models import Data

from dataset.ScriptsMongoDB import ScriptsMongoDB

from gradereportreader import GradeReportReader
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework import permissions, parsers
from django.core.files import File

from rest_framework.authentication import SessionAuthentication, BasicAuthentication 

class CsrfExemptSessionAuthentication(SessionAuthentication):

    def enforce_csrf(self, request):
        return  # To not perform the csrf check previously happening


# Create your views here.

def randomData(request):
      scripts = ScriptsMongoDB()
      doc = scripts.get_random(collection_name='disciplinas')
      nome = doc['nome']
      creditos = doc['creditos']
      sigla = doc['sigla']
      curso = doc['curso']
      return render(request, 'basic/test.html', {'nome' : nome, 'creditos': creditos,
                                                 'sigla' :sigla , 'curso' : curso})

def get_cr(file):
      scripts = ScriptsMongoDB()
      # path = "test_pdfs/08.pdf"
      reader = GradeReportReader(file)
      grades = reader.get_grades()
      scripts = ScriptsMongoDB()
      total_creditos = 0
      total_eletivas = 0
      prof = reader.get_prof()
      name = reader.name


      sum_creditos = 0

      not_identified = []
      media_simples = grades['grade'].mean()
      for _, grade in grades.iterrows():
            sigla = grade['courses']
            data = scripts.get_data_find_one(collection_name='disciplinas', filter={'sigla': sigla})
            if data:
                  total_creditos += data['creditos']
                  sum_creditos += data['creditos']*grade['grade']
                  if 'ELETIVA' in data['curso']:
                        total_eletivas += data['creditos']
            else:
                  not_identified.append(sigla)
      cr = sum_creditos/total_creditos
      return {'cr':cr, 'media_simples': media_simples, "total_eletivas":total_eletivas, "curso": prof, "nome": name}

class DataItemView(APIView):
      permission_classes = (permissions.AllowAny,)
      parser_classes = (parsers.FormParser,parsers.MultiPartParser, parsers.FileUploadParser, )
      authentication_classes = (CsrfExemptSessionAuthentication, BasicAuthentication)


      def post(self, request):
          my_file = File(request.data.get('file'))
          
          serializer = DataSerializer(data=get_cr(my_file))
          if serializer.is_valid():
                return Response(serializer.data, status=status.HTTP_200_OK)
          else:
                return Response({"status": "error", "data": serializer.errors}, status=status.HTTP_400_BAD_REQUEST)

class ContactItemView(APIView):
      permission_classes = (permissions.AllowAny,)
      authentication_classes = (CsrfExemptSessionAuthentication, BasicAuthentication)


      def post(self, request):          
          serializer = ContactSerializer(data=request.data)
          if serializer.is_valid():
                serializer.save()
                return Response({"status": "error", "data": serializer.data}, status=status.HTTP_200_OK)
          else:
                return Response({"status": "error", "data": serializer.errors}, status=status.HTTP_400_BAD_REQUEST)