from dataclasses import dataclass, field
from typing import Dict
from allocation.domain.value_objects.beers import Beer


@dataclass(frozen=True)
class RoundItem:
    beer: Beer
    total: int
    _flattened: Dict[str, int] = field(init=False, repr=False)

    def __post_init__(self):
        object.__setattr__(
            self,
            "flattened",
            {
                "name": self.beer.name,
                "price_per_unit": self.beer.price,
                "total": self.total,
            },
        )

    def __repr__(self) -> dict:
        return repr(self._flattened)
