from dataclasses import dataclass


@dataclass(frozen=True)
class Beer:
    name: str
    price: float
