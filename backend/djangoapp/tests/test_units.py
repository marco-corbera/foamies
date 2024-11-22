import pytest
from repositories.orders import OrderRepository
from services.orders import OrderService
from domain.entities.orders import Order
from domain.entities.rounds import Round
from domain.value_objects.round_items import RoundItem
from domain.value_objects.beers import Beer


@pytest.fixture
def repository():
    return OrderRepository()


@pytest.fixture
def service(repository):
    return OrderService(order_repo=repository)


def test_repository_get_by_id(repository):
    order = repository.get(1)
    assert order is not None
    assert isinstance(order, Order)
    assert isinstance(order.rounds, list)
    if order.rounds:
        assert isinstance(order.rounds[0], Round)
        assert isinstance(order.rounds[0].items, list)
        if order.rounds[0].items:
            assert isinstance(order.rounds[0].items[0], RoundItem)
            assert isinstance(order.rounds[0].items[0].beer, Beer)


def test_repository_get_all(repository):
    all_orders = repository.get_all()
    assert len(all_orders) > 0
    for order_id, order in all_orders.items():
        assert isinstance(order_id, int)
        assert isinstance(order, Order)


def test_service_get_order_by_id(service):
    order = service.get(1)
    assert order is not None
    assert isinstance(order, Order)
    assert isinstance(order.rounds, list)
    if order.rounds:
        assert isinstance(order.rounds[0], Round)
        assert isinstance(order.rounds[0].items, list)


def test_service_get_all_orders(service):
    orders = service.get_all()
    assert isinstance(orders, list)
    assert len(orders) > 0
    for order in orders:
        assert "id" in order
        assert isinstance(order["id"], int)
