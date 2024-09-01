const  mongoose=require('mongoose');
const url=process.env.MONGO_URL;

mongoose.connect(url)
   .then (()=>{
         console.log('connected to database');
}).catch((err)=>{
    console.log(`Error while connecting to db ${err}`);
})