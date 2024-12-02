#!/usr/bin/env python3
"""
This file contains a function that sum all elements of a list
"""


from typing import List, Union
"""
Sum all elements of a list
"""


def sum_mixed_list(mxd_lst: List[Union[int, float]]) -> float:
    suma = sum(mxd_lst)
    return suma
