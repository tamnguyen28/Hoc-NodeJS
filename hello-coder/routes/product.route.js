var express = require('express');
var router = express.Router();
var controller = require('../controllers/product.controller');
var db = require('../db');

router.get('/product', controller.product);

module.exports= router;