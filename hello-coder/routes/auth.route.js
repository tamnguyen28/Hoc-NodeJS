var express = require('express');
var router = express.Router();
var controller = require('../controllers/auth.controller');

var db= require('../db');

router.get('/login', controller.login);
router.post('/login', controller.postLogin);

module.exports = router;