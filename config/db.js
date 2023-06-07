import mongoose from "mongoose";

const connectDB = async () => {
  try {
    mongoose.set("strictQuery", false);
    await mongoose.connect(process.env.MONGO_URL)
      .then((conn) => {
        console.log(`Conneted To MongoDB`);
      })
  } catch (error) {
    console.log(`Errro in Mongodb ${error}`);
  }
};

export default connectDB;
