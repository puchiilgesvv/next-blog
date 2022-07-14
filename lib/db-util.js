import { MongoClient } from 'mongodb';

export async function connectDatabase() {
    const uri = `mongodb+srv://${process.env.mongodb_username}:${process.env.mongodb_password}@${process.env.mongodb_clustername}.rj4jmjw.mongodb.net/?retryWrites=true&w=majority`
    const client = await new MongoClient(uri).connect()
    return client;
}