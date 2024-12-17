#!/usr/bin/env python3
"""
This module contains a function that return a list
of school with specific topic
"""


def schools_by_topic(mongo_collection, topic):
    """
    Searches for documents in a MongoDB collection where the 'topics'
    field contains a specific value.

    Arguments:
        mongo_collection: MongoDB collection object (from PyMongo).
        topic (str): The topic to search for in the 'topics' field.

    Returns:
        list: A list of documents that match the filter.
    """
    filtro = {"topics": topic}
    return list(mongo_collection.find(filtro))
