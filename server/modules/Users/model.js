const { Decimal128 } = require('mongodb');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    User_Name:{
        type: String,
        required: true
    },
    User_Password:{
        type: String,
        required: true,
    },
    User_Email:{
        type: String,
        required: true,
    },
    User_Address:{
        type: String,
        required: true,
    },
    User_Tele:{
        type: String ,
        required: true,
    }
}, {timestamps: true});

const Users = mongoose.model('Users', schema);
module.exports = Users;