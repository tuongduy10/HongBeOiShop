const express = require('express');
const router = express.Router();

const controller = require('../modules/Perfume/controller');

router.get('/', controller.index);
router.post('/add', controller.add);
router.post('/findbyid', controller.findbyid);
router.post('/delete', controller.delete);

module.exports = router;