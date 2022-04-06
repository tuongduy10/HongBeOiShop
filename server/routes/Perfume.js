const express = require('express');
const router = express.Router();

const controller = require('../modules/Perfume/controller');

router.get('/findall', controller.findall);
router.post('/findbyid', controller.findbyid);
router.post('/add', controller.add);
router.post('/update', controller.update);
router.post('/delete', controller.delete);

module.exports = router;