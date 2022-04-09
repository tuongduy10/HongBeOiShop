const express = require('express');
const router = express.Router();

const controller = require('../modules/Cart/controller');

function checkSession(req, res, next){
    if(req.session.user == null){
        res.redirect("/");
        return
    }
}

router.post('/addToCart', function(req, res, next){checkSession(req, res, next)}, controller.addToCart);


module.exports = router;