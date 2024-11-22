from dataclasses import dataclass
from datetime import datetime
from typing import List
from domain.value_objects.round_items import RoundItem


@dataclass
class Round:
    created: datetime
    items: List[RoundItem]
