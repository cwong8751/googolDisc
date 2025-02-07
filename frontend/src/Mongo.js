const { MongoClient, ObjectId } = require('mongodb');
require('dotenv').config();

const url = process.env.MONGO_URI;
const dbName = 'googolDisc';
const client = new MongoClient(url, { useNewUrlParser: true, useUnifiedTopology: true });


// crud functions for mongoDB
async function connect() {
    if (!client.isConnected()) {
        await client.connect();
    }
    return client.db(dbName);
}

async function create(collectionName, document) {
    const db = await connect();
    const result = await db.collection(collectionName).insertOne(document);
    return result.ops[0];
}

async function read(collectionName, query) {
    const db = await connect();
    const result = await db.collection(collectionName).find(query).toArray();
    return result;
}

async function update(collectionName, id, updateDocument) {
    const db = await connect();
    const result = await db.collection(collectionName).updateOne({ _id: ObjectId(id) }, { $set: updateDocument });
    return result.modifiedCount > 0;
}

async function remove(collectionName, id) {
    const db = await connect();
    const result = await db.collection(collectionName).deleteOne({ _id: ObjectId(id) });
    return result.deletedCount > 0;
}

// specific functions


module.exports = {
    create,
    read,
    update,
    remove
};