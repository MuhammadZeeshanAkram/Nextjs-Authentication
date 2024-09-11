const mongoose = require('mongoose');
const url = process.env.MONGO_URL;


mongoose.connect(url)
    .then(() => {
        console.log('connection successfull with MONGODB');
    }).catch((err) => {
        console.log('connection failed with MONGODB', err);
    })