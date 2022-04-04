const PerfumeModel = require('./model');
const ObjectId = require('mongodb').ObjectID;

module.exports.index = function (req, res) {
    PerfumeModel.find()
        .then(function(result){
            res.json({status: "success", data: result})
        })
        .catch(function(error){
            res.json({status: "error", data: error})
        })
}

module.exports.add = function (req, res) {
    var name = req.body.name;
    var price = req.body.price;
    var image = req.body.image;
    var desciption = req.body.desciption;
    var type = req.body.type;

    const Perfume = new PerfumeModel({
        Perfume_Name: name,
        Perfume_Price: price,
        Perfume_Image: image,
        Perfume_Description: desciption,
        Type: type
    }) 

    Perfume.save()
        .then(function(result){
            res.json({status: "success", data: "Add successfully"})
        })
        .catch(function(error){
            res.json({status: "error", data: error})
        })
}
module.exports.findbyid = function (req, res) {
    var id = new ObjectId((req.query.id).trim())
    PerfumeModel.findById(id)
        .then(function(result){
            res.json({status: "success", data: result})
        })
        .catch(function(result){
            res.json({status: "error", data: result})
        })
}
module.exports.delete = function (req, res) {
    const Perfume = new PerfumeModel({
        Perfume_Name:"Nước hoa xịn 01",
        Perfume_Price:10000000000,
        Perfume_Image:"test",
        Perfume_Description:"Nước hoa 01 này rất thơm",
        Type:{
            "New": "4%",
        }
    }) 
    Perfume.save()
        .then(function(result){
            res.json({status: "success", data: result})
        })
        .catch(function(error){
            res.json({status: "error", data: error})
        })
}