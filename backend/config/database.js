import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const uri = process.env.MONGODB_URI;

export const connectDB = async () => {
  try {
    mongoose.connect(uri).then(() => {
      console.log('DB connected');
    }).catch((err) => console.log(err))
  } catch (error) {
    console.log(error)
  }
}