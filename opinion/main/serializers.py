from rest_framework import serializers
from main import models

class UserSerializer(serializers.Serializer):
    email = serializers.EmailField(min_length=8, max_length=32)
    password = serializers.CharField(max_length=32)
    time_create = serializers.DateTimeField(read_only=True)
    time_update = serializers.DateTimeField(read_only=True)

    def create(self, validated_data):
        return models.User.objects.create(**validated_data)