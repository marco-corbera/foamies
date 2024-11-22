from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from services.orders import OrderService
from backfoam.serializers import OrderSerializer, OrderListSerializer
from manage import get_order_repository


class OrderListView(APIView):
    """Handles GET requests to list all orders."""

    def get(self, request, *args, **kwargs):
        order_repo = get_order_repository()
        order_service = OrderService(order_repo)
        orders = order_service.get_all()
        serializer = OrderListSerializer(orders, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)


class OrderDetailView(APIView):
    """Handles GET requests to retrieve a specific order by ID."""

    def get(self, request, *args, **kwargs):
        order_id = kwargs.get("id")
        order_repo = get_order_repository()
        order_service = OrderService(order_repo)
        order = order_service.get(order_id)

        if not order:
            return Response(
                {"detail": "Order not found."}, status=status.HTTP_404_NOT_FOUND
            )

        mapped_order = self._map_order(order)
        serializer = OrderSerializer(mapped_order)
        return Response(serializer.data, status=status.HTTP_200_OK)

    def _map_order(self, order):
        """Map the Order object to a flat structure compatible with the serializer."""
        return {
            "created": order.created.isoformat(),
            "paid": order.paid,
            "subtotal": order.subtotal,
            "taxes": order.taxes,
            "discounts": order.discounts,
            "rounds": [
                {
                    "created": round.created.isoformat(),
                    "items": [
                        {
                            "name": item.beer.name,
                            "price_per_unit": item.beer.price,
                            "total": item.total,
                        }
                        for item in round.items
                    ],
                }
                for round in order.rounds
            ],
        }
