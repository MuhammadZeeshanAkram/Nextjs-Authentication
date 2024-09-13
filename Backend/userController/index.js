const UserModel = require("../models/UserModels");
const bcrypt = require('bcryptjs');


module.exports={
    
    registerUser:async(req,res)=>{
           const userModel= new UserModel(req.body);
           userModel.password=await bcrypt.hash(req.body.password,10);
           try{
               const response=await userModel.save();
               response.password=undefined;
               return res.status(201).json({message:"Registered successfully",data:response});
           }catch(err){
               return res.status(500).json({message:"Internal server error",error:err});

           }
    },
    loginUser:(req,res)=>{

        res.send('login success');
    }

}






