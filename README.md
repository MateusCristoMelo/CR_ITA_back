# CR_ITA

## Configurando ambiente python

Antes de usar o ambiente, crie um ambiente virtual. Recomendo o [virtualenv](https://pypi.org/project/virtualenv/).

```shell
pip install virtualenv
```

Para criar o ambiente virtual, execute:

```shell
virtualenv venv
```

Para ativar o ambiente virtual, use:

```shell
source venv/bin/activate
```

Uma vez ativado o ambiente virtual, instale os pacotes:

```shell
pip install -r requirements.txt
```

Sempre que for instalado um novo pacote é nesse arquivo que será colocado as mudanças.

## Usando o MongoDB

Para visualizar localmente os dados, pode-se utilizar o [MongoDB Compass](https://www.mongodb.com/pt-br/products/compass). Para se conectar ao banco, use a URI:
```
mongodb+srv://alienX:alienx208@crita.qogmy.mongodb.net/test
```

## Usando o django

O comando `python manage.py runserver` executa o servidor Django.
