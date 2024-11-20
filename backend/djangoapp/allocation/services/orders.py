from allocation.repositories.orders import OrderRepository
from allocation.domain.entities.orders import Order


class OrderService:
    def __init__(self, order_repo: OrderRepository, tax_rate: float = 0.18):
        self.order_repo = order_repo
        self.tax_rate = tax_rate

    def get_order(self) -> Order:
        """
        Returns order always with taxes calculated by default.
        """

        return self._get_order_with_tax()

    def _get_order_with_tax(self) -> Order:
        """
        Obtains the order from repository and adds taxes to it.
        """
        order = self.order_repo.get_order()
        tax = self._calculate_tax(order["subtotal"])

        return Order(
            created=order["created"],
            paid=order["paid"],
            subtotal=order["subtotal"],
            taxes=tax,
            rounds=order["rounds"],
            discount=order["discounts"],
        )

    def _calculate_tax(self, subtotal: float) -> float:
        """
        Applies taxes rate to subtotal
        """

        return round(subtotal * self.tax_rate, 2)
