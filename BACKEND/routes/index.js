const express=require('express');
const { registerUser, loginUser } = require('../userController');
const { userRegisterValidate } = require('../utils/userValidation');

const routes=express.Router();

routes.post('/register',userRegisterValidate, registerUser);//when person comes to register page then it first goes to userRegisterValidate and then goes to registerUser

routes.post('/login',loginUser);

module.exports=routes;