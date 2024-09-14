const UserModel = require("../models/UserModels");
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');

module.exports={
    
    registerUser:async(req,res)=>{
           const userModel= new UserModel(req.body);
           userModel.password=await bcryptjs.hash(req.body.password,10);
           try{
               const response=await userModel.save();
               response.password=undefined;
               return res.status(201).json({message:"Registered successfully",data:response});
           }catch(err){
               return res.status(500).json({message:"Internal server error",error:err});

           }
    },
    loginUser:async(req,res)=>{
          
        try{
            const user=await UserModel.findOne({email:req.body.email});
            if(!user){
              return res.status(401)
              .json({message:"Authentication failed,Invalid username/password"});
            }

            const isPassEqual=await bcryptjs.compare(req.body.password,user.password);
            if(!isPassEqual){
                return res.status(401)
              .json({message:"Authentication failed,Invalid username/password"});
            }

            const tokenObject={
                _id:user._id,
                email:user.email,
                fullName:user.fullName

            }
            const jwttoken=jwt.sign(tokenObject,process.env.JWT_SECRET,{expiresIn:"3h"});
            return res.status(200)
                   .json({jwttoken,tokenObject});
        }catch(err){
            return res.status(500).json({message:"error",error:err});
        }
    },
    
    getUsers:async(req,res)=>{
        
    }




}






