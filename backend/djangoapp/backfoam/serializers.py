from rest_framework import serializers


class ItemSerializer(serializers.Serializer):
    name = serializers.CharField()
    price_per_unit = serializers.FloatField()
    total = serializers.FloatField()


class RoundSerializer(serializers.Serializer):
    created = serializers.CharField()
    items = ItemSerializer(many=True)


class OrderSerializer(serializers.Serializer):
    created = serializers.CharField()
    paid = serializers.BooleanField()
    subtotal = serializers.FloatField()
    taxes = serializers.FloatField()
    rounds = RoundSerializer(many=True)