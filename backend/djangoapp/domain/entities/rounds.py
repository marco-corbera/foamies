from dataclasses import dataclass
from datetime import datetime
from domain.value_objects.round_items import RoundItem


@dataclass
class Round:
    created: datetime
    items: list[RoundItem]
