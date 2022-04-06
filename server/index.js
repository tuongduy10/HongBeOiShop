const express = require('express');
const session = require('express-session');

require('dotenv').config();
require('./config/database');
require('./config/seeding');

const app = express();
const port = 3000;

app.use(express.json()) 
app.use(session({
    secret: 'muadibe'
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