const { Decimal128 } = require('mongodb');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    Cont_Name:{
        type: String,
        required: true
    },
    Cont_Email:{
        type: String,
        required: true,
    },
    Cont_Tele:{
        type: String,
        required: true,
    },
    Cont_Content:{
        type: String,
        required: true,
    },
    Cont_Content:{
        type: String ,
        required: true,
    },
    Cont_Status:{
        type: String ,
        required: true,
    },
    Cont_DateAdd:{
        type: Date ,
        required: true,
    },
    Cont_DateRep:{
        type: Date ,
        required: true,
    },
    Ad_ID:{
        type: Schema.Types.ObjectId ,
        required: true,
    }
    


}, {timestamps: true});

const Contact = mongoose.model('Contact', schema);
module.exports = Contact;