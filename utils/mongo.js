// This File Is To Connect The App With The Database Stored On cloud.mongodb.com --> (NOSQL Database).. So We Use The Package Or Library mongoose (npm install mongoose) To Easy Connect The db With The App .

import mongoose from "mongoose";

const MONGO_URI = process.env.MONGO_URI;

if (!MONGO_URI) {
    throw new Error("MONGO_URI is not valid");
}

export const dbConnect = async () => {
    try {
        const { connection } = await mongoose.connect(MONGO_URI);
        if (connection.readyState === 1) {
            return Promise.resolve(true)
        }
    } catch (err) { return Promise.reject(err) }
}