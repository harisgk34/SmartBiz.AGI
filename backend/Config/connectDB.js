
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config({ path: "./backend/.env" }); 


const connectDB= async () =>{ 
   await mongoose.connect(process.env.database_url, 
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
    
   )
    .then(() => {
    console.log("MongoDB connected successfully");
  }).catch((error) => {
    console.error("MongoDB connection error:", error)
  })
}

export default connectDB;


