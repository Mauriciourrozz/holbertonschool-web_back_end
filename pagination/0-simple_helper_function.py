#!/usr/bin/env python3
"""
This file defines a function named index_range
"""


def index_range(page: int, page_size: int) -> tuple[int, int]:
    """
    Calculate the range of indexes for paginating data.

    Arguments:
        page (int): Page number (starts at 1).
        page_size (int): Number of elements per page.

    Returns:
        tuple[int, int]: A tuple containing the initial index (inclusive)
        and the final (unique) index for the requested page.
    """
    start = (page - 1) * page_size
    # Calcula el índice inicial de la página ajustando la numeración de páginas
    # (que empieza en 1) a índices basados en 0.

    end = start + page_size
    # Calcula el índice final como el límite exclusivo,
    # sumando el inicio y el tamaño de la página.

    tupla = (start, end)
    return tupla
