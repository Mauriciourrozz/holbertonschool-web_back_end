#!/usr/bin/env python3
"""
This is a file that contains a function
"""


import asyncio
import random
from typing import AsyncGenerator


async def async_generator() -> AsyncGenerator[float, None]:
    """
    Function that does not receive arguments and is responsible for generating
    a random number between 0 and 10 every one second and returns it
    """
    for i in range(11):
        await asyncio.sleep(1)
        num = random.uniform(0, 10)
        yield num
