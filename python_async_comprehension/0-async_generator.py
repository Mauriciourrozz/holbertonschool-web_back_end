#!/usr/bin/env python3
"""
This is a file that contains a function
"""


import asyncio
from typing import Generator
import random


async def async_generator() -> Generator[float, None, None]:
    """
    Generates 10 random numbers between 0 and 10 asynchronously.

    Returns: AsyncGenerator[float, None]: Random numbers generated.
    """
    for i in range(10):
        await asyncio.sleep(1)
        yield random.uniform(0, 10)
