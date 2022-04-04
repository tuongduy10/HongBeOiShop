const express = require('express');
require('dotenv').config();

require('./config/database');

const app = express();
const port = 3000;

app.use(express.json()) 

const routerPerfume = require("./routes/Perfume")

app.use("/perfume", routerPerfume)

app.listen(port, function(error){
    if (error) {
        console.log("Something went wrong");
    }
    console.log("server is running port:  http://localhost:" + port);
})

module.exports = app