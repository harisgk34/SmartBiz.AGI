// const mongoose = require('mongoose')
import mongoose from "mongoose";




const userSchema = new mongoose.Schema({
    username:{
        type:String,
        required:[true,"Username is required"],
        unique:true,
        trim:true,

    },
    password:{
        type:String,
        required:[true,"Password is required"],

        
    },
    email:{
        type:String,
        required:[true,"Email is required"],

        unique:true,
        trim:true,
       
    },
    createdAt:{
        type:String,
        default:Date.now
    }
} 
)

const User= mongoose.model("User",userSchema);

export default User;


// const UserSchema = new mongoose.Schema({})