var md5 = require('md5');

var db= require('../db');

module.exports.login = function(req, res){
    res.render('auth/login', { 
        user1:db.get('usersdb').value()
    });
};

module.exports.postLogin = function(req, res){
    //tìm trong database thằng nào có email 
    //trùng vs người dùng nhập thì lấy về kiểm tra pass của nó
    var email = req.body.email;
    var password = req.body.password;

    var user = db.get('usersdb').find({email: email}).value();

    if(!user){
        res.render('auth/login', {
            error:[
                'User does not exist.'
            ],
            values: req.body //lưu lại dữ liệu người dùng không bị mất đi
            
        });
        return;
    }

    var hashedPasswords = md5(password);

    if(user.password !== hashedPasswords){
        res.render('auth/login', {
            error:[
                'Wrong password.'
            ],
            values: req.body
        })
    }

    res.cookie('userId',user.id, { 
        signed: true
    });
    res.redirect('/users');
};