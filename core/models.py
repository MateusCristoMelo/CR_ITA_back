from pyexpat import model
from django.db import models

# Create your models here.
class Data(models.Model):
      cr = models.FloatField()
      media_simples = models.FloatField()
      total_eletivas = models.FloatField()
      curso = models.CharField(max_length=60)
      nome = models.CharField(max_length=100)

class Contact (models.Model):
      name = models.CharField(max_length=100)
      text = models.CharField(max_length=1000)

      def __str__(self):
            return self.name