import { MongoClient } from 'mongodb';

export async function connectDatabase() {
    const uri = "mongodb+srv://dbUser:9ZLWUGz0l2fJcCOX@cluster0.rj4jmjw.mongodb.net/?retryWrites=true&w=majority"
    const client = await new MongoClient(uri).connect()
    return client;
}

export async function insertDocument(dbname, client, collection, document) {
    const db = client.db(dbname);

    const result = await db.collection(collection).insertOne(document);

    return result;
}

export async function getAllDocuments(dbname, client, collection, sort, filter=
    {}) {
    const db = client.db(dbname);

    const documents = await db
        .collection(collection)
        .find(filter)
        .sort(sort)
        .toArray();

    return documents;
}