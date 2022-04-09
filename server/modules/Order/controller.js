const Order = require('./model');

module.exports.checkout = function(req, res){
    const cart = req.session.cart;
    new Order({
        
    }).save()
        .then(function(req, res){

        })
        .catch(function(req, res){

        })
}