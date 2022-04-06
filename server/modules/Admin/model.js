const { Decimal128 } = require('mongodb');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
        Ad_Name:{
        type: String,
        required: true
    },
    Ad_Password:{
        type: String,
        required: true,
    },
    Ad_Email:{
        type: String,
        required: true,
    },
    Ad_Phone:{
        type: String,
        required: true,
    },
    Ad_Position:{
        type: String ,
        required: true,
    }
}, {timestamps: true});

const Admin = mongoose.model('Admin', schema);
module.exports = Admin;