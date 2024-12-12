#!/usr/bin/env python3
import csv
import math
from typing import List

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

class Server:
    """Server class to paginate a database of popular baby names.
    """
    DATA_FILE = "Popular_Baby_Names.csv"

    def __init__(self):
        self.__dataset = None

    def dataset(self) -> List[List]:
        """Cached dataset
        """
        if self.__dataset is None:
            with open(self.DATA_FILE) as f:
                reader = csv.reader(f)
                dataset = [row for row in reader]
            self.__dataset = dataset[1:]

        return self.__dataset

    def get_page(self, page: int = 1, page_size: int = 10) -> List[List]:
        assert isinstance(page, int) and page > 0
        assert isinstance(page_size, int) and page_size > 0
        start, end = index_range(page, page_size)
        dataset = self.dataset()
        if start >= len(dataset):
            return []
        return dataset[start:end]
