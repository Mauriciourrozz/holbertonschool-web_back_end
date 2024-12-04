#!/usr/bin/env python3
"""
This file contains a function
"""


from typing import Callable


def make_multiplier(multiplier: float) -> Callable[[float], float]:
    """
    This function return a multiplier of float
    """
    def multiplier_function(value: float) -> float:
        return value * multiplier
    return multiplier_function
