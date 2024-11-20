import pytest
from django.urls import reverse
from rest_framework import status
from rest_framework.test import APIClient
import django

from database import order as mock_order_data

django.setup()


@pytest.fixture
def api_client():
    return APIClient()


def test_get_order_with_tax(api_client):
    url = reverse("order-list")
    response = api_client.get(url)

    assert response.status_code == status.HTTP_200_OK

    api_order_data = response.json()

    taxes = round(mock_order_data["subtotal"] * 0.18, 2)

    assert api_order_data["created"] == mock_order_data["created"]
    assert api_order_data["paid"] == mock_order_data["paid"]
    assert api_order_data["subtotal"] == mock_order_data["subtotal"]
    assert api_order_data["taxes"] == taxes
