from repositories.orders import OrderRepository
from domain.entities.orders import Order


class OrderService:
    def __init__(self, order_repo: OrderRepository, tax_rate: float = 0.18):
        self.order_repo = order_repo
        self.tax_rate = tax_rate

    def get(self, id) -> Order:
        """
        Returns order always with taxes calculated by default.
        """

        return self._get_order_with_tax(id)

    def get_all(self):
        """
        Returns all orders in a list format with their ids.
        """
        orders_dict = self.order_repo.get_all()
        return [{"id": order_id, "paid": order.paid } for order_id, order in orders_dict.items()]

    def _get_order_with_tax(self, id) -> Order:
        """
        Obtains the order from repository and adds taxes to it.
        """
        order = self.order_repo.get(id)
        if not order:
            return None
        tax = self._calculate_tax(order.subtotal)

        return Order(
            id=id,
            created=order.created,
            paid=order.paid,
            subtotal=order.subtotal,
            taxes=tax,
            rounds=order.rounds,
            discounts=order.discounts,
        )

    def _calculate_tax(self, subtotal: float) -> float:
        """
        Applies taxes rate to subtotal
        """

        return round(subtotal * self.tax_rate, 2)
