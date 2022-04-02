const express = require('express');
require('dotenv').config();

const mongoose = require('mongoose');

const app = express();
const port = 3000;

const routerHome = require("./routes/Home")

mongoose.connect(process.env.dbUrl, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(function(result){
        console.log("connected");
    })
    .catch()

app.use("/", routerHome)

app.listen(port, function(error){
    if (error) {
        console.log("Something went wrong");
    }
    console.log("server is running port:  http://localhost:" + port);
})