from rest_framework import serializers
from core.models import Data, Contact

class DataSerializer(serializers.ModelSerializer):
      cr = serializers.FloatField()
      media_simples = serializers.FloatField()
      total_eletivas = serializers.FloatField()
      curso = serializers.CharField(max_length=60)
      nome = serializers.CharField(max_length=100)
      class Meta:
            model = Data
            fields = ('__all__')

class ContactSerializer(serializers.ModelSerializer):
      name = serializers.CharField(max_length=100)
      text = serializers.CharField(max_length=1000)
      class Meta:
            model = Contact
            fields = ('__all__')
