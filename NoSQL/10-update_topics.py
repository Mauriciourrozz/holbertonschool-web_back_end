#!/usr/bin/env python3
"""
Changes all topics of a school document based on the name
"""


def update_topics(mongo_collection, name, topics):
    """
    Update the topics of a document in a MongoDB collection.
    Parameters:

    mongo_collection (pymongo.collection.Collection):
    The MongoDB collection where the document is stored.
    name (str): The name of the document to update.
    topics (list): A list of topics to update in the document.

    Returns:
    pymongo.results.UpdateResult: The result of the update operation.
    """
    nombre = {"name": name}
    tema = {"$set": {"topics": topics}}
    return mongo_collection.update_many(nombre, tema)
