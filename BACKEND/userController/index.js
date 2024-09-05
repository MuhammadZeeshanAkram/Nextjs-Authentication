const UserModel = require('../models/UserModel');
const bcrypt=require('bcrypt');



module.exports={


    //things to perform in the registeration
    //1.validate the req.body(to prevent the bad data to come in the database)-Done
    //2. create the Mongodb UserModel-Done
    //3. hashing the password (do the password encryption)-Done
    //4. save the data to mongodb-Done
    //5. send the response to client

    registerUser:async (req, res)=>{
        //for UserModel making
        const UserModel = new UserModel(req.body);//making of mongodb usermodel
        //For hashing password
        UserModel.password=await bcrypt.hash(req.body.password,10);//the hashing is done with the password and the salt is 10 
        //For saving the data
        try{
            
                const response=await UserModel.save();//saves data in the database
                res.password=undefined;//the mongodb gives the response of the id and password and the password is  set to undefined as it will not be shown to admin
                return res.status(201).json({message:'success',data:response})//The data is exposed to client or admin here but the password is shown as undefined means it is not exposed
                res.send(response);
        }catch(err){
            return res.status(500).json({message:'Error',error:err})
        }
    },
    loginUser:(req, res)=>{
        res.send('login success')
    }
}