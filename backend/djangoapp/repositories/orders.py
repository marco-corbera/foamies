import random
from domain.entities.orders import Order
from domain.value_objects.beers import Beer
from domain.entities.rounds import Round
from domain.value_objects.round_items import RoundItem
from repositories.base import AbstractOrderRepository
from datetime import datetime, timedelta


class OrderRepository(AbstractOrderRepository):
    def __init__(self):
        if not hasattr(self, "orders"):
            self.orders = {}
            self._initialize_data()

    def _initialize_data(self):
        for order_id in range(1, 6):
            subtotal = round(random.uniform(10.0, 100.0), 2)
            taxes = round(subtotal * 0.18, 2)
            discounts = round(subtotal * random.uniform(0.0, 0.1), 2)
            rounds = self._generate_random_rounds()
            self.orders[order_id] = Order(
                id=order_id,
                created=datetime.now() - timedelta(days=order_id),
                paid=random.choice([True, False]),
                subtotal=subtotal,
                taxes=taxes,
                discounts=discounts,
                rounds=rounds,
            )

    def _generate_random_rounds(self):
        rounds = []
        for _ in range(random.randint(3, 5)):
            items = self._generate_random_items()
            rounds.append(
                Round(
                    created=datetime.now() - timedelta(minutes=random.randint(0, 60)),
                    items=items,
                )
            )
        return rounds

    def _generate_random_items(self):
        beers = ["Corona", "Club Colombia", "Quilmes", "Cuzqueña"]
        items = []
        for _ in range(random.randint(1, 4)):
            beer_name = random.choice(beers)
            price_per_unit = round(random.uniform(1.0, 3.0), 2)
            beer = Beer(name=beer_name, price=price_per_unit)
            total = random.randint(1, 5)
            items.append(
                RoundItem(
                    beer=beer,
                    total=total,
                )
            )
        return items

    def get(self, id: int) -> Order:
        return self.orders.get(id)

    def add(self, order: Order):
        new_id = len(self.orders) + 1
        order.id = new_id
        self.orders[new_id] = order

    def get_all(self) -> list[Order]:
        return self.orders
