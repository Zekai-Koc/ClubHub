import dotenv from "dotenv";
dotenv.config();
import app from "./app.js";
import mongoose from "mongoose";
import connectDB from "./db/connectDB.js";

connectDB();

const port = process.env.PORT || 9999;

app.listen(port, () => console.log(`Listening on port: ${port}`));
