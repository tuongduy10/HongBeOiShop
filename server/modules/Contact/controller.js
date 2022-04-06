const ContactModel = require('./model');
const ObjectId = require('mongodb').ObjectID;

module.exports.findall = function (req, res) {
    ContactModel.find()
        .then(function(result){
            res.json({status: "success", data: result})
        })
        .catch(function(error){
            res.json({status: "error", data: error})
        })
}

module.exports.findbyid = function (req, res) {
    var id = new ObjectId((req.query.id).trim())
    ContactModel.findById(id)
        .then(function(result){
            res.json({status: "success", data: result})
        })
        .catch(function(result){
            res.json({status: "error", data: result})
        })
}

module.exports.add = function (req, res) {
    var name = req.body.name;
    var email = req.body.email;
    var content = req.body.content;
    var status = req.body.status;
    var phone = req.body.phone;
    var dateadd = req.body.dateadd;
    var daterep = req.body.daterep;
    var type = req.body.type;

    const Contact = new ContactModel({
        Cont_Name: name,
        Cont_Email: email,
        Cont_Tele: phone,
        Cont_Content: content,
        Cont_Status: status,
        Cont_DateAdd: dateadd,
        Cont_DateRep: daterep,
        Type: type

    }) 

    Contact.save()
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
    var email = req.body.email;
    var content = req.body.content;
    var status = req.body.status;
    var phone = req.body.phone;
    var dateadd = req.body.dateadd;
    var daterep = req.body.daterep;
    var type = req.body.type;
    ContactModel.findByIdAndUpdate(id, {
        Cont_Name: name,
        Cont_Email: email,
        Cont_Tele: phone,
        Cont_Content: content,
        Cont_Status: status,
        Cont_DateAdd: dateadd,
        Cont_DateRep: daterep,
        Type: type

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
    ContactModel.findByIdAndDelete(id)
        .then(function(result){
            res.json({status: "success", data: result})
        })
        .catch(function(result){
            res.json({status: "error", data: result})
        })
}
