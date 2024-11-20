# views/orders.py
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from allocation.services.orders import OrderService
from allocation.repositories.orders import OrderRepository
from backfoam.serializers import OrderSerializer


class OrderView(APIView):
    def get(self, request):
        """Handle GET requests to retrieve the order."""
        order_repo = OrderRepository()
        order_service = OrderService(order_repo)

        order = order_service.get_order()
        serializer = OrderSerializer(order)

        return Response(serializer.data, status=status.HTTP_200_OK)
