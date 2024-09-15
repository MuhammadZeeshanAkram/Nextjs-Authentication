const jwt=require('jsonwebtoken');

const ensureAuthenticated=(req,res,next)=>{
    if(!req.headers.authorization){
        return res.status(403)
        .json({message:"Token is required"});
    }
    try{
            const decoded=jwt.verify(req.headers['authorization'],process.env.JWT_SECRET);
            
            next(); 
    }catch(err){
        res.status(403)
        .json({message:"Invalid or expired token"});

    }
    
}

module.exports={ensureAuthenticated}