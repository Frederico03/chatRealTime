import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import userRoutes from "./src/routes/userRoutes.js"
import messageRoutes from "./src/routes/messageRoutes.js"

const app = express();

import dotenv from 'dotenv';

dotenv.config();

app.use(cors());
app.use(express.json());

app.use("/api/auth", userRoutes);
app.use("/api/messages", messageRoutes)

mongoose.connect(process.env.MONGO_URL)
    .then(() => {
        console.log("DB Connection Succesfull")  
    })
    .catch((err) => {
        console.log("DB Error:" , err.message)
    });

const server = app.listen(process.env.PORT, () => { 
    console.log(`Server Started on Port ${ process.env.PORT }`)
}) 