import mongoose from "mongoose";

const MONGO_URL =
  "mongodb+srv://sagarbhatiya:Sagar%40170304@cluster0.aiyt4iq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(MONGO_URL);
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (err) {
    console.error(`Error: ${err.message}`);
    process.exit(1);
  }
};

export default connectDB;
