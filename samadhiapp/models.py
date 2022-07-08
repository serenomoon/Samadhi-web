from django.db import models

# Create your models here.
# def upload_to(instance, filename):
#     return 'samadhiapp/staticfiles/{filename}'.format(filename=filename)
def upload_to(instance, filename):
     return '/'.join(['uploadimg',str(instance.title), filename])

def upload_to_name(instance, filename):
     return '/'.join(['uploadimgname',str(instance.name), filename])


class User(models.Model):
    name = models.CharField(max_length=150)
    email = models.EmailField(max_length=254)
    password = models.CharField(max_length=150)

    def _str_(self):
        return self.name

class Clases(models.Model):
    title = models.CharField(max_length=150)
    mensaje = models.TextField()
    date = models.DateField()
    time = models.TimeField()
    uploadimg = models.ImageField(upload_to =upload_to , blank=True, null=True)

    class Meta:
        ordering = ['title']

    def _str_(self):
        return self.title

class Noticias(models.Model):
    title = models.CharField(max_length=150)
    mensaje = models.TextField()
    date = models.DateField()
    time = models.TimeField()
    uploadimg = models.ImageField(upload_to =upload_to , blank=True, null=True)

    def _str_(self):
        return self.title

class Facilitadores(models.Model):
    name = models.CharField(max_length=150)
    lastname = models.CharField(max_length=150)
    address = models.CharField(max_length=150)
    telephone = models.CharField(max_length=150)
    email = models.EmailField(max_length=254)
    activity = models.CharField(max_length=150)
    bio = models.TextField()
    service = models.TextField()
    clase = models.ManyToManyField(Clases, related_name="facilitadores", blank=True)
    date = models.DateField()
    time = models.TimeField()
    uploadimgname = models.ImageField(upload_to =upload_to_name , blank=True, null=True)

    def _str_(self):
        return self.name

class Alumnos(models.Model):
    name = models.CharField(max_length=150)
    lastname = models.CharField(max_length=150)
    email = models.EmailField(max_length=254)
    address = models.CharField(max_length=150)
    telephone = models.CharField(max_length=150)
    clase = models.ManyToManyField(Clases, related_name='alumnos', blank=True)
    date = models.DateField()
    time = models.TimeField()

    def _str_(self):
        return self.name
