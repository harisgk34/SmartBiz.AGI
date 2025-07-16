

import express from "express";
import cors from "cors";
import connectDB from "./Config/connectDB.js";
import dotenv from "dotenv";
import chatRouter from "./route/chat.js"; 
import userRouter from "./route/userRoute.js"; 
import path from "path"; 

import 'dotenv/config'

dotenv.config({ path: "./backend/.env" });

const app = express();

app.use(express.json());
app.use(cors());

connectDB(); 

app.use("/api/v1/chatApi", chatRouter);  //  use the router
app.use("/api/v1/", userRouter);    //  no console.log() inside use()





console.log(process.env.port)

app.listen(5000, () => {
  console.log(` Server Started on PORT 5000`); 
});
