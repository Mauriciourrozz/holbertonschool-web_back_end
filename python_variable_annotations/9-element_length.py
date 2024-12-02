#!/usr/bin/env python3
"""
Function that return lenght of element
"""
from typing import Iterable, Sequence, List, Tuple


def element_length(lst: Iterable[Sequence]) -> List[Tuple[Sequence, int]]:
    """
    Function that return lenght of element
    """
    return [(i, len(i)) for i in lst]
