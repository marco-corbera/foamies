import pytest
from allocation.services.orders import OrderService
from allocation.repositories.orders import OrderRepository
from database import order as mock_order_data


@pytest.fixture
def order_repository():
    return OrderRepository()


@pytest.fixture
def order_service(order_repository):
    return OrderService(order_repo=order_repository)


def test_get_order_with_tax(order_service):
    order_with_tax = order_service.get_order()

    assert order_with_tax is not None

    assert order_with_tax.created == mock_order_data["created"]
    assert order_with_tax.paid == mock_order_data["paid"]
    assert order_with_tax.subtotal == mock_order_data["subtotal"]

    expected_tax = round(mock_order_data["subtotal"] * 0.18, 2)
    assert order_with_tax.taxes == expected_tax
