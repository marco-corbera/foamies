from abc import ABC, abstractmethod
from domain.entities.orders import Order


class AbstractOrderRepository(ABC):
    @abstractmethod
    def get(self, id: int) -> Order:
        raise NotImplementedError

    @abstractmethod
    def get_all(self) -> list[Order]:
        raise NotImplementedError
