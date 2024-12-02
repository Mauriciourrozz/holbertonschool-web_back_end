#!/usr/bin/env python3
"""
This file contains a function that sum all elements of a list
"""


from typing import List, Union
def sum_mixed_list(mxd_lst: List[Union[int, float]]) -> float:
    """
    Sum all elements of a list
    """    
    suma = sum(mxd_lst)
    return suma
