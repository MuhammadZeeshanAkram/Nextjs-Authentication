const express=require('express');
const { registerUser, loginUser } = require('../userController');
const { userRegisterValidate } = require('../utils/userValidation');
const routes=express.Router();

    //validate req.body --Done
    //create mongodb UserModel --Done
    //do password encryption --Done
    //save data to mongodb --Done
    //return response to client --Done
routes.post('/register',userRegisterValidate,registerUser);

routes.post('/login',loginUser);


module.exports=routes;