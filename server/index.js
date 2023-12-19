import dotenv from 'dotenv'
import express from 'express'
import cors from "cors";
import mongoose from 'mongoose';

import Profile from './routes/profile.js';

dotenv.config()

const app = express()
const port = 5000
 
const allowedOrigin = process.env.NODE_ENV === 'development' ? 'http://localhost:3001' : 'https://bookmark-ppl.vercel.app';

var whitelist = [allowedOrigin]

const corsOptions = {
    origin: function (origin, callback) {
        if (whitelist.indexOf(origin) !== -1 || !origin) {
            callback(null, true)
        } else {
            callback(new Error('Not allowed by CORS'))
        }
    },
    optionsSuccessStatus: 200,
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
}

app.use(cors(corsOptions))
app.use(express.json());

app.use('/api/profile', Profile)

mongoose.set("strictQuery", false);
const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log('Connected to MongoDB Atlas!')
    } catch (error) {
        throw error;
    }
}


app.listen(port, () => {
    connect()
    console.log(`Server listening on port ${port}`)
})