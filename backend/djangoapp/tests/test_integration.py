import pytest
from django.urls import reverse
from rest_framework import status
import django

django.setup()


@pytest.fixture
def api_client():
    from rest_framework.test import APIClient

    return APIClient()


def test_get_all_orders(api_client):
    url = reverse("order-list")
    response = api_client.get(url)

    assert response.status_code == status.HTTP_200_OK

    data = response.json()
    assert isinstance(data, list)
    assert len(data) > 0
    for order in data:
        assert "id" in order
        assert isinstance(order["id"], int)


def test_get_order_by_id(api_client):
    url = reverse("order-detail", kwargs={"id": 1})
    response = api_client.get(url)

    assert response.status_code == status.HTTP_200_OK

    data = response.json()
    assert "rounds" in data
    assert isinstance(data["rounds"], list)


def test_get_nonexistent_order(api_client):
    url = reverse("order-detail", kwargs={"id": 9999})
    response = api_client.get(url)

    assert response.status_code == status.HTTP_404_NOT_FOUND
    assert response.json() == {"detail": "Order not found."}
