#!/usr/bin/env python3
"""
This module contains a function list_all
"""


def list_all(mongo_collection):
    """
    Returns all documents from a MongoDB collection as a list.

    Args:
        mongo_collection (pymongo.collection.Collection)
            from which the documents are to be retrieved.
    Returns:
        list: A list of dictionaries
        representing the documents in the collection.
        If the collection is None, an empty list is returned.
    """
    if mongo_collection is None:
        return []
    return list(mongo_collection.find())
