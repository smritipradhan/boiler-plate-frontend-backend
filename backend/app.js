import express, { json } from "express";
import testRouter from "./routes/testRoute.js";
import mongoose from "mongoose";
import { config } from "dotenv";
import cors from "cors";

config({ path: "./config.env" });

const app = express();

app.use(cors()); // For preventing CORS Error
app.use(json());

app.use("/api/v1/tours", testRouter);

const DB = process.env.DATABASE;

mongoose.connect(DB).then((con) => {
  console.log("Connected Succesfully !!");
});

export default app;

/* 

Extra Code that is there for Reference

// app.use((req, res, next) => {
//   console.log('Hello from middleware !! ');
//   next();
// }); 

*/
