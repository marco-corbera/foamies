from allocation.domain.entities.orders import Order
from allocation.interfaces.orders import AbstractOrderRepository
from database import order


class OrderRepository(AbstractOrderRepository):
    def __init__(self):
        """Initialize the repository with a predefined order object."""
        self._order = order

    def get_order(self) -> Order:
        """Retrieve the current order."""
        return self._order
