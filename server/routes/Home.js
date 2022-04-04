const express = require('express');
const router = express.Router();

const controller = require('../modules/Home/controller');

router.get('/', controller.index);
router.get('/add', controller.add);


module.exports = router;