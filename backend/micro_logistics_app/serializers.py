from rest_framework import serializers
from rest_framework.validators import UniqueValidator

from micro_logistics_app.models import *
from micro_logistics_app.validators import *


class NewUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = SiteUser
        fields = (
            'email',
            'password',
            'first_name',
            'last_name',
            'organization',
            'provides_stock',
            'needs_stock',
            'street_1',
            'street_2',
            'city',
            'county',
            'state',
            'zip',
            'phone',
        )

        extra_kwargs = {
            'email': {
                'validators': [UniqueValidator(queryset=SiteUser.objects.all())],
            }
        }

    def create(self, validated_data):
        new_site_user = SiteUser(**validated_data)

        new_site_user.username = validated_data['email']
        new_site_user.set_password(validated_data['password'])
        new_site_user.save()

        return new_site_user

class FinalProjectSerializer (serializers.ModelSerializer):
    class Meta:
        model = FinalProjectModel
        fields = (
            'first_name',
            'last_name',
            'favourite_field',
        )
