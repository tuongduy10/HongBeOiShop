const Perfume = require('./model');

module.exports.index = function (req, res) {
    Perfume.find()
        .then(function(result){
            res.json({status: "success", data: result})
        })
        .catch(function(error){
            res.json({status: "error", data: error})
        })
}

module.exports.add = function (req, res) {
    const perfume = new Perfume({
        Perfume_Name:"Nước hoa xịn 03",
        Perfume_Price:10000000000,
        Perfume_Image:"test",
        Perfume_Description:"Nước hoa 03 này rất thơm",
        Type:{
            "New": "5%",
        }
    }) 
    perfume.save()
        .then(function(result){
            res.json({status: "success", data: result})
        })
        .catch(function(error){
            res.json({status: "error", data: error})
        })
}