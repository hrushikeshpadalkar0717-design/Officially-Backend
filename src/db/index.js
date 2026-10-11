import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async() => {
    try {

        console.log("MongoDB URI loaded:", Boolean(process.env.MONGODB_URI));
        console.log("Database name:", DB_NAME);
        const connectInstance = await mongoose.connect(
            `${process.env.MONGODB_URI}/${DB_NAME}`
        );

        console.log(
            `MongoDB connected!! DB HOST: ${connectInstance.connection.host}`
        );
    } catch (error) {
        console.log("MONGODB connection error", error);
        process.exit(1);
    }
};

export default connectDB;