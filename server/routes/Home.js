const express = require('express');
const router = express.Router();

const controller = require('../modules/Home/controller');

router.get('/', controller.home);


module.exports = router;