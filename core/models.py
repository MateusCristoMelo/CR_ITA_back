from django.db import models

# Create your models here.
class Data(models.Model):
      cr = models.FloatField()
      media_simples = models.FloatField()
      total_eletivas = models.FloatField()
      curso = models.CharField(max_length=60)
      nome = models.CharField(max_length=100)