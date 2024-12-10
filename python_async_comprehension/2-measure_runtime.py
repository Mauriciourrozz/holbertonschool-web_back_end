#!/usr/bin/env python3
"""
Module measure_runtime
"""

import asyncio
import time
async_comprehension = __import__('1-async_comprehension').async_comprehension


async def measure_runtime() -> float:
    """
    Measures the total time it takes to execute async_comprehension()
    4 times concurrently.

    Returns:
        float: The total time taken to run the 4 async_comprehension
        coroutines.
    """
    inicial = time.perf_counter()
    x = [async_comprehension() for i in range(4)]
    await asyncio.gather(*x)
    final = time.perf_counter()
    total = final - inicial
    return total
