import pytest
from allocation.repositories.orders import OrderRepository
from database import order as mock_order_data


@pytest.fixture
def order_repository():
    return OrderRepository()


def test_get_order(order_repository):
    order = order_repository.get_order()

    assert order is not None

    assert order["created"] == mock_order_data["created"]
    assert order["paid"] == mock_order_data["paid"]
    assert order["subtotal"] == mock_order_data["subtotal"]
    assert len(order["rounds"]) == len(mock_order_data["rounds"])
