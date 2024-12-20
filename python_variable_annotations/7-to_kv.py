#!/usr/bin/env python3
"""
This function return a tuple
"""
from typing import Union, Tuple


def to_kv(k: str, v: Union[int, float]) -> Tuple[str, float]:
    """
    This function return a tuple
    """
    return (k, float(v**2))
