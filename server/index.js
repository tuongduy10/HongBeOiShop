const express = require('express');
const session = require('express-session');

require('dotenv').config();
require('./config/database');

const app = express();
const port = 3000;

app.use(express.json()) 
app.use(session({
    secret: 'muadibe'
}))

const routerPerfume = require("./routes/Perfume")

app.use("/perfume", routerPerfume)

app.listen(port, function(error){
    if (error) {
        console.log("Something went wrong");
    }
    console.log("server is running port:  http://localhost:" + port);
})

module.exports = app