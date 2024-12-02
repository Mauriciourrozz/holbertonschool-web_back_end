#!/usr/bin/env python3
"""
This file return a sum of all elements of a list
"""


def sum_list(input_list: float) -> float:
    """
    This file return a sum of all elements of a list
    """
    suma: int = 0
    for i in input_list:
        suma += i
    return suma
