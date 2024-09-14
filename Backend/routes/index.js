const express=require('express');
const { registerUser, loginUser, getUsers } = require('../userController');
const { userRegisterValidate, userLoginValidate } = require('../utils/userValidation');
const routes=express.Router();

    //validate req.body --Done
    //create mongodb UserModel --Done
    //do password encryption --Done
    //save data to mongodb --Done
    //return response to client --Done
routes.post('/register',userRegisterValidate,registerUser);



     //check user using email
     //compare password
     //create jwt token
     //sent response to client
routes.post('/login',userLoginValidate,loginUser);



routes.get('/users', getUsers);//how to use jwt token


module.exports=routes;