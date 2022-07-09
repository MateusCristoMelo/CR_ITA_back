from sre_constants import MAX_UNTIL
from rest_framework import serializers
from core.models import Data

class DataSerializer(serializers.ModelSerializer):
      cr = serializers.FloatField()
      media_simples = serializers.FloatField()
      total_eletivas = serializers.FloatField()
      curso = serializers.CharField(max_length=60)
      nome = serializers.CharField(max_length=100)
      class Meta:
            model = Data
            fields = ('__all__')
