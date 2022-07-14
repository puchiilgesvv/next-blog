import { connectDatabase } from "../../lib/db-util"

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { email, name, message } = req.body

        if (!email || !email.includes('@') || !name || name.trim() === '' || !message || message.trim() === '') {
            res.status(422).json({ message: 'Invalid form submission!' })
            return
        }

        const newMessage = {
            email,
            name,
            message
        }

        let client

        try {
            client = await connectDatabase()
        } catch (error) {
            res.status(500).json({ message: error.message ? error.message : 'Failed to connect to database.' })
            return
        }

        const db = client.db(process.env.mongodb_database)
        try {
            const result = await db.collection('form').insertOne(newMessage)
            newMessage.id = result.insertedId
        } catch (error) {
            client.close()
            res.status(500).json({ message: 'Somehow it failed.' })
            return
        }

        client.close()

        res.status(201).json({ message: 'Successfully sent!', form: newMessage })
    }
}