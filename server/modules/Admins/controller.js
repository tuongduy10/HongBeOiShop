const AdminsModel = require('./model');
const ObjectId = require('mongodb').ObjectID;

module.exports.findall = function (req, res) {
    AdminsModel.find()
        .then(function(result){
            res.json({status: "success", data: result})
        })
        .catch(function(error){
            res.json({status: "error", data: error})
        })
}

module.exports.findbyid = function (req, res) {
    var id = new ObjectId((req.query.id).trim())
    AdminsModel.findById(id)
        .then(function(result){
            res.json({status: "success", data: result})
        })
        .catch(function(result){
            res.json({status: "error", data: result})
        })
}

module.exports.add = function (req, res) {
    var name = req.body.name;
    var pass = req.body.pass;
    var email = req.body.email;
    var position = req.body.position;
    var phone = req.body.phone;

    const Admins = new AdminsModel({
        Ad_Name: name,
        Ad_Password: pass,
        Ad_Email: email,
        Ad_Phone: phone,
        Ad_Position: position

    }) 

    Admins.save()
        .then(function(result){
            res.json({status: "success", data: "Add successfully"})
        })
        .catch(function(error){
            res.json({status: "error", data: error})
        })
}

module.exports.update = function (req, res) {
    var id = new ObjectId((req.query.id).trim());
    var name = req.body.name;
    var pass = req.body.pass;
    var email = req.body.email;
    var position = req.body.position;
    var phone = req.body.phone;

    AdminsModel.findByIdAndUpdate(id, {
        Ad_Name: name,
        Ad_Password: pass,
        Ad_Email: email,
        Ad_Phone: phone,
        Ad_Position: position

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
    AdminsModel.findByIdAndDelete(id)
        .then(function(result){
            res.json({status: "success", data: result})
        })
        .catch(function(result){
            res.json({status: "error", data: result})
        })
}
