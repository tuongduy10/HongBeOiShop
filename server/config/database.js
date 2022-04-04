const mongoose = require('mongoose');

const db = 
mongoose.connect(process.env.dbUrl, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(function(result){
        console.log("connected");
    })
    .catch(function(result){
        console.log("error");
    })

