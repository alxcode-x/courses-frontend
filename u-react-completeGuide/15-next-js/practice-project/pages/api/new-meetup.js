// POST /api/new-meetup
import { MongoClient } from 'mongodb';

async function handler(req, res) {
    if (req.method === 'POST') {
        const data = req.body;

        const client = await MongoClient.connect("mongodb+srv://<username>:<password>@cluster0.kvz0sgn.mongodb.net/<collection>?retryWrites=true&w=majority"); //replace <> values
        const db = client.db();

        const meetupsCollection = db.collection('meetups');
        const result = await meetupsCollection.insertOne(data); //this receives an object

        console.log(result);

        client.close();

        res.status(201).json({message: 'Meetup inserted!'});
    }
}

export default handler;
