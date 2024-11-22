from dataclasses import dataclass, field
from datetime import date
from typing import List, Dict, Union
from domain.value_objects.beers import Beer


@dataclass(frozen=True)
class StockItem:
    beer: Beer
    quantity: int
    _flattened: Dict[str, Union[str, float, int]] = field(init=False, repr=False)

    def __post_init__(self):
        object.__setattr__(
            self,
            "flattened",
            {
                "name": self.beer.name,
                "price": self.beer.price,
                "quantity": self.quantity,
            },
        )

    def __repr__(self) -> dict:
        return repr(self._flattened)


@dataclass(frozen=True)
class Stock:
    beers: List[StockItem]
    last_updated = date
