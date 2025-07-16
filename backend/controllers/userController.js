



//get all user Api

// const User = require("../model/userModel")
import User from "../model/userModel.js";


const getAllUsers =async(req,res)=>{

    //geting all users from database
    console.log("Fetching all users...eorr");
     await User.find({})

    try {
 console.log("im enter ...");
  res.status(200).json({
        sucess:true,
        message:"All users fetched successfully",

      

    })

      
        
        
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Internal server error",
        
        })
    }
   

}

export default getAllUsers;


//api for insheting

const insert = (req,res)=>{


    const {username,email,password}=req.body
    


    try {
        if(username&&email&&password){
            const newUser = new User({
                username,
                email,
                password
            })
            console.log("got the cridential");
            res.status(200).json("insert complited")
            
        }


        
    } catch (error) {

        
    }
}