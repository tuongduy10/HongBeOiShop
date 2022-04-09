const UsersModel = require('./model');
const ObjectId = require('mongodb').ObjectID;

module.exports.login = function(req, res){
    UsersModel.findOne({User_Name: req.body.username, User_Password: req.body.password}, function(error, user){
        if(error) res.json({status: "error", data: "Fail to login"});

        if(!user) res.json({status: "error", data: "Fail to login"});

        if(user) {
            req.session.user = user
            res.json({status: "success", data: "Login successfully !"});
        }
    })
    
}

module.exports.findall = function (req, res) {
    UsersModel.find()
        .then(function(result){
            res.json({status: "success", data: result})
        })
        .catch(function(error){
            res.json({status: "error", data: error})
        })
}

module.exports.findbyid = function (req, res) {
    var id = new ObjectId((req.query.id).trim())
    UsersModel.findById(id)
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
    var address = req.body.address;
    var phone = req.body.phone;

    const Users = new UsersModel({
        User_Name: name,
        User_Password: pass,
        User_Email: email,
        User_Address: address,
        User_Tele: phone
    }) 

    Users.save()
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
    var address = req.body.address;
    var phone = req.body.phone;

    UsersModel.findByIdAndUpdate(id, {
        User_Name: name,
        User_Password: pass,
        User_Email: email,
        User_Address: address,
        User_Tele: phone
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
    UsersModel.findByIdAndDelete(id)
        .then(function(result){
            res.json({status: "success", data: result})
        })
        .catch(function(result){
            res.json({status: "error", data: result})
        })
}
