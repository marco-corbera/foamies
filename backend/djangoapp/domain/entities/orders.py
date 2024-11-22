from dataclasses import dataclass
from datetime import date
from domain.entities.rounds import Round


@dataclass
class Order:
    id: int
    created: date
    paid: float
    subtotal: float
    taxes: float
    discounts: float
    rounds: Round
