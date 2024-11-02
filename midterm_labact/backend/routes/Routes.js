
const express = require('express');
const router = express.Router();
const controller = require('../controller/controller');

// path

router.post('/getdata', controller.Adddata); 

module.exports = router; 