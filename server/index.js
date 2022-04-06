const express = require('express');
const session = require('express-session');
const { default: mongoose } = require('mongoose');

require('dotenv').config();
require('./config/database');
require('./config/seeding');

const app = express();
const port = 3000;

app.use(express.json()) 
const MongoStore = require('connect-mongo');
app.use(session({
    secret: 'muadibe',
    resave: false,
    saveUninitialized: false,
    cookie: { maxAge: 100 * 60 * 1000 }
}))


const routerPerfume = require("./routes/Perfume")
const routerAdmins = require("./routes/Admins")
const routerUsers = require("./routes/Users")
const routerContact = require("./routes/Contact")


app.use("/perfume", routerPerfume)
app.use("/admins", routerAdmins)
app.use("/users", routerUsers)
app.use("/contact", routerContact)

app.listen(port, function(error){
    if (error) {
        console.log("Something went wrong");
    }
    console.log("server is running port:  http://localhost:" + port);
})

module.exports = app