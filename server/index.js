const express = require('express');
require('dotenv').config();

const app = express();
const port = 3000;

const routerHome = require("./routes/Home")


app.use("/", routerHome)

app.listen(port, function(error){
    if (error) {
        console.log("Something went wrong");
    }
    console.log("server is running port:  http://localhost:" + port);
})