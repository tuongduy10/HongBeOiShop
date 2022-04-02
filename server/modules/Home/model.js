const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PerfumeSchema = new Schema({
    Perfume_Name:{
        type: String,
        required: true
    },
    
}) 

const Perfume = mongoose.model('Perfume', PerfumeSchema);
module.exports = Perfume;