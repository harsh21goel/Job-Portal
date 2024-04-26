import mongoose from "mongoose";

const connectDb=async()=>{
    try {
        const conn= await mongoose.connect(process.env.MONGODB_URL)
        console.log(`Mongo DB connected: ${ conn.connection.host}`);
    } catch (error) {
        console.log(error);
        process.exit(1)
    }
}

export default connectDb