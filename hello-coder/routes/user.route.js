var express = require('express');
var router = express.Router();
var controller = require('../controllers/user.controller');
var validate = require('../validate/user.validate');
// var authMiddleware = require('../middlewares/auth.middleware');

var db= require('../db');

//authMiddleware.requireAuth đặt ở vị trí này có nghĩa là nó sẽ được chạy trước index
router.get('/', controller.index);

router.get('/cookie', function(req, res, next) {
    res.cookie('user-id', 12345);
    res.send('Hello');
})

router.get('/search', controller.search);

router.get('/create', controller.create);

router.get('/:id', controller.id);

router.post('/create',validate.postCreate, controller.postCreate);

module.exports = router;