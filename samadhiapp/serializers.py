from rest_framework_json_api import serializers
from samadhiapp.models import User

class UserListSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = User
        fields = ( 'name', 'email', 'password')