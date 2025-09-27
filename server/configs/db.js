import mongoose from "mongoose";

const connectDB = async () => {
  try {
    //connect with mongodb
    await mongoose.connect(`${process.env.MONGODB_URL}`);
    //message after connection
    console.log("Database connected.....");
  }
  
  //catch if any error occurs 
  catch (error) {
   
    //message after error
    console.error(" Database connection error:", error.message);
    process.exit(1);
  }
};

export default connectDB;
