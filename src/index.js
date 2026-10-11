import dotenv from "dotenv";
import express from "express";
import connectDB from "./db/index.js";

dotenv.config();

const app = express();

connectDB()



.then(() => {
        app.listen(process.env.PORT, () => {
            console.log(`Server is running on port ${process.env.PORT}`);
        });
    })
    .catch((err) => {
        console.log("MONGO db connection failed !!!");

    })