from rest_framework_json_api import serializers

from samadhiapp.models import Alumnos, Clases, Facilitadores, Noticias, User

class UserListSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = User
        fields = ( 'name', 'email', 'password')


class NoticiasListSerializer(serializers.HyperlinkedModelSerializer):
    uploadimg = serializers.ImageField()

    class Meta:
        model = Noticias
        fields = ( 'title','mensaje','date','time','uploadimg')

class FacilitadoresListSerializer(serializers.HyperlinkedModelSerializer):
    clase = serializers.SlugRelatedField(
        many=True, 
        queryset=Clases.objects.all(),
        slug_field='title'
    ) 
    uploadimgname = serializers.ImageField()
    # clase = serializers.PrimaryKeyRelatedField(queryset=Clases.objects.all(), many=True)

    class Meta:
        model = Facilitadores
        fields = ['id','clase','name','lastname','address','telephone','email','activity','bio','service','date','time','uploadimgname']


class AlumnosListSerializer(serializers.HyperlinkedModelSerializer):
    clase = serializers.SlugRelatedField(
        many=True, 
        queryset=Clases.objects.all(),
        slug_field='title'
    ) 
    
    class Meta:
        model = Alumnos
        fields = ['id','name','lastname','email','address','telephone','clase','date','time']



class ClasesListSerializer(serializers.HyperlinkedModelSerializer):
    facilitadores = FacilitadoresListSerializer(many=True, read_only=True)
    alumnos = AlumnosListSerializer(many=True, read_only=True)
    uploadimg = serializers.ImageField()

    class Meta:
        model = Clases
        fields = ( 'title','mensaje','date','time','uploadimg', 'facilitadores','alumnos')

