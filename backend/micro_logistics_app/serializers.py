from rest_framework import serializers

from micro_logistics_app.models import *


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


class FinalProjectSerializer (serializers.ModelSerializer):
    class Meta:
        model = FinalProjectModel
        fields = (
            'first_name',
            'last_name',
            'favorite_number',
        )

    def validate_favorite_number (self, favorite_number):
        if not isinstance(favorite_number, int):
            raise serializers.ValidationError("favorite number must be a number!")

        return favorite_number
