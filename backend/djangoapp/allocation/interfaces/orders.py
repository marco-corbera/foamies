from abc import ABC, abstractmethod
from allocation.domain.entities.orders import Order


class AbstractOrderRepository(ABC):
    @abstractmethod
    def get_order(self) -> Order:
        """Retrieve an order."""
        pass
