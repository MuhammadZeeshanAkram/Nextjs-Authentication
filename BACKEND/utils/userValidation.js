//joi is used to make the registration process to easy
const Joi=require('joi');
const userRegisterValidate=(req,res,next)=>{
    const schema=Joi.object({
        fullName:Joi.string().min(3).max(100).required(),
        email:Joi.string().min(6).max(255).required().email(),
        password:Joi.string().min(6).max(1024).required().alphanum(),
    });
    const{error,value}=schema.validate(req.body);
    if(error){
       return res.status(400).json({message:"Bad Request",error});
    }
    next();

}

module.exports={
    userRegisterValidate
}