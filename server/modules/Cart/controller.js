const Perfume = require('../Perfume/model');
const Cart = require('./model');
const ObjectId = require('mongodb').ObjectID;

module.exports.addToCart = function (req, res) {
    var id = new ObjectId((req.query.id).trim());
    var cart = new Cart(req.session.cart ? req.session.cart : {items: {}});

    Perfume.findById(id, function(error, perfume){
        if(error){
            return res.redirect('/');
        }
        if(!req.session.user){
            res.json({status: "error", message: "Fail to add"});
            return;
        }

        cart.add(perfume, perfume._id);
        req.session.cart = cart;

        console.log(req.session.cart);
        res.json({status: "success", message: "Added"});
    });   
}

