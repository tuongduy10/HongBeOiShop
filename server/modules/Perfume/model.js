const { ObjectId } = require('mongodb');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    // _id:{
    //     type: ObjectId,
    // },
    Perfume_Name:{
        type: String,
        required: true
    },
    Perfume_Price:{
        type: Number,
        required: true,
    },
    Perfume_Image:{
        type: String,
        required: true,
    },
    Perfume_Description:{
        type: String,
        required: true,
    },
    Type:{
        type: Object,
        required: true,
    },
    Gender: {
        type: String
    }
}, {timestamps: true});

const Perfume = mongoose.model('Perfume', schema);
module.exports = Perfume;