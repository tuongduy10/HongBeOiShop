const express = require('express');
const router = express.Router();

const controller = require('../modules/Cart/controller');

router.post('/addToCart', controller.addToCart);


module.exports = router;