from dataclasses import dataclass
from datetime import date
from allocation.domain.entities.rounds import Round


@dataclass
class Order:
    created: date
    paid: float
    subtotal: float
    taxes: float
    discount: float
    rounds: Round
