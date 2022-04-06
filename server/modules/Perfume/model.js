const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    Perfume_Name:{
        type: String,
        required: true
    },
    Perfume_Price:{
        type: Schema.Types.Decimal128,
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

const Perfume = mongoose.model('Perfume', schema);
module.exports = Perfume;