import mongoose from "mongoose";
import { DB_NAME } from "../constants.js"


const connectDB = async () => {
    try {

        const connectInstance = mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)

        console.log(`MongoDB is coonected to the host: ${connectInstance}`)
    } catch (error) {
        console.log("ERROR: ", error);

    }
}


export default connectDB


