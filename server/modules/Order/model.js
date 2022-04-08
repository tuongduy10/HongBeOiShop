const { Decimal128 } = require('mongodb');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    Order_Date:{
        type: Date,
        required: true
    },
    Order_Total:{
        type: Number,
        required: true,
    },
    Order_Address:{
        type: String,
        required: true,
    },
    Products: {
        type: Array,
        required: true
    },
    Order_Status:{
        type: String,
        required: true,
    },
    Ad_ID:{
        type: Schema.Types.ObjectId ,
        required: true,
    },
    User_ID:{
        type: Schema.Types.ObjectId ,
        required: true,
    }
}, {timestamps: true});

const Contact = mongoose.model('Contact', schema);
module.exports = Contact;