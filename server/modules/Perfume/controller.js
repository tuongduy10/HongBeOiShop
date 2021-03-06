const PerfumeModel = require('./model');
const ObjectId = require('mongodb').ObjectID;


module.exports.findall = function (req, res) {
    PerfumeModel.find()
        .then(function(result){
            res.json({status: "success", data: result})
        })
        .catch(function(error){
            res.json({status: "error", data: error})
        })
}
module.exports.findbyid = function (req, res) {
    var id = req.query.id
    PerfumeModel.findById(id)
        .then(function(result){
            res.json({status: "success", data: result})
        })
        .catch(function(result){
            res.json({status: "error", data: result})
        })
}
module.exports.add = function (req, res) {

    var name = req.body.name;
    var price = req.body.price;
    var image = req.body.image;
    var desciption = req.body.desciption;
    var type = req.body.type;
    var gender = req.body.gender;

    const Perfume = new PerfumeModel({
        Perfume_Name: name,
        Perfume_Price: price,
        Perfume_Image: image,
        Perfume_Description: desciption,
        Type: type,
        Gender: gender
    }) 

    Perfume.save()
        .then(function(result){
            console.log(result)
            res.json({status: "success", data: "Add successfully"})
        })
        .catch(function(error){
            console.log(error)
            res.json({status: "error", data: error})
        })
}
module.exports.update = function (req, res) {
    var id = new ObjectId((req.query.id).trim());
    var name = req.body.name;
    var price = req.body.price;
    var image = req.body.image;
    var desciption = req.body.desciption;
    var type = req.body.type;
    var gender = req.body.gender;

    PerfumeModel.findByIdAndUpdate(id, {
        Perfume_Name: name,
        Perfume_Price: price,
        Perfume_Iamge: image,
        Perfume_Description: desciption,
        Perfume_Type: type,
        Gender: gender
    })
        .then(function(result){
            res.json({status: "success", data: result})
        })
        .catch(function(result){
            res.json({status: "error", data: result})
        })
}
module.exports.delete = function (req, res) {
    var id = new ObjectId((req.query.id).trim())
    PerfumeModel.findByIdAndDelete(id)
        .then(function(result){
            res.json({status: "success", data: result})
        })
        .catch(function(result){
            res.json({status: "error", data: result})
        })
}
