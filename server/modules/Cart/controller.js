const Perfume = require('../Perfume/model');
const Cart = require('./model');
const ObjectId = require('mongodb').ObjectID;

module.exports.addToCart = function (req, res) {
    var id = req.query.id;
    var cart = new Cart(req.session.cart ? req.session.cart : {})

    Perfume.findById()
        .then(function(result){
            cart.add()
        })  
        .catch(function(result){
            return res.json({status: "error", message: "Error"})
        })
}