import mongoose from 'mongoose';

export const connectDB = async (MONGO_URL) => {
  try {
    mongoose.set('strictQuery', false);
    await mongoose.connect(MONGO_URL);
    console.log('DB Connected');
  } catch (error) {
    console.log('DB Connection Error:', error.message);
  }
};
