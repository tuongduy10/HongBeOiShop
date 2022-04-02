const { Decimal128 } = require('mongodb');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PerfumeSchema = new Schema({
    Perfume_Name:{
        type: String,
        required: true
    },
    Perfume_Price:{
        type: Decimal128,
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
    }
}, {timestamps: true});

const Perfume = mongoose.model('Perfume', PerfumeSchema);
module.exports = Perfume;