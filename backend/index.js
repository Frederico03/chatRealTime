import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import userRoutes from "./src/routes/userRoutes.js"
import messageRoutes from "./src/routes/messageRoutes.js"
import { Server as SocketIOServer } from 'socket.io';

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

const io = new SocketIOServer(server, {
  cors: {
    origin: "http://localhost:3000",
    credentials: true,
  }
});

global.onlineUsers = new Map();
io.on("connection", (socket) => {
  global.chatSocket = socket;
  socket.on("add-user", (userId) => {
    onlineUsers.set(userId, socket.id);
    console.log(onlineUsers)
  });

  socket.on("send-msg", (data) => {
    const sendUserSocket = onlineUsers.get(data.to);
    if (sendUserSocket) {
      socket.to(sendUserSocket).emit("msg-recieve", data.message);
    }
  });
});