import pandas as pd
from pymongo import InsertOne
from ScriptsMongoDB import ScriptsMongoDB

db = pd.read_excel('dataset/database.xlsx')
db = db.reset_index()
scripts_mongo = ScriptsMongoDB()
scripts_mongo.delete_elements_from_collection(collection_name='disciplinas')
col = scripts_mongo.db['disciplinas']
c = db.values.tolist()
disciplinas = []
for _, row in db.iterrows():
      json = {
            'sigla': row['Sigla'][:-1],
            'creditos': row['Créditos'],
            'nome' : row['Nome'],
            'curso' : row['Tipo']

      }
      disciplinas.append(InsertOne(json))
col.bulk_write(disciplinas)