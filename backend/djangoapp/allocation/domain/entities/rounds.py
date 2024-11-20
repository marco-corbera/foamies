from dataclasses import dataclass
from datetime import date
from typing import List
from allocation.domain.value_objects.round_items import RoundItem


@dataclass
class Round:
    created: date
    items: List[RoundItem]
