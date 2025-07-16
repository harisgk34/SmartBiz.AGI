
import User from "../model/userModel.js";
import connectDB from "../Config/connectDB.js";
import mongoose from "mongoose";

// Ensure mongoose is connected before running the seeder

const users = [
  {
    username: "haran01",
    email: "haran01@example.com",
    password: "Password1"
  },
  {
    username: "haran02",
    email: "haran02@example.com",
    password: "Password2"
  },
  {
    username: "haran03",
    email: "haran03@example.com",
    password: "Password3"
  },
  {
    username: "haran04",
    email: "haran04@example.com",
    password: "Password4"
  },
  {
    username: "haran05",
    email: "haran05@example.com",
    password: "Password5"
  },
  {
    username: "haran06",
    email: "haran06@example.com",
    password: "Password6"
  },
  {
    username: "haran07",
    email: "haran07@example.com",
    password: "Password7"
  },
  {
    username: "haran08",
    email: "haran08@example.com",
    password: "Password8"
  },
  {
    username: "haran09",
    email: "haran09@example.com",
    password: "Password9"
  },
  {
    username: "haran10",
    email: "haran10@example.com",
    password: "Password10"
  }
];


const seedDatabase = async() =>{
     connectDB();


     User.deleteMany({});
     console.log("Database dleted successfully");
     User.insertMany(users)
     console.log("Database seeded successfully");
    
     process.exit(1);



}
seedDatabase()

