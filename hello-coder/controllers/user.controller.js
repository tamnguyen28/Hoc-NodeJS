var shortid = require('shortid');
var db= require('../db');

module.exports.index = function(req, res){
    res.render('users/index', { 
        // user1:users
        user1:db.get('usersdb').value()
    });
};

module.exports.search = function(req, res){
    var q = req.query.q;
    var matchedUsers =users.filter(function(user) //filter trả về các phần tử tìm được
    { 
        return user.name.toLowerCase().indexOf(q.toLowerCase()) !== -1;
    });
    res.render('users/index',{
        user1: matchedUsers,
        //question: q
    });
};

module.exports.create = function(req, res){
    console.log(req.cookies);
    res.render('users/create');
};

module.exports.id = function(req, res){
    var id= req.params.id;

    // var user1 = db.get('users').find({id:Number(id)}).value();
    var user1 = db.get('usersdb').find({id:id}).value();

    res.render('users/view',{
        user: user1
    });
};

module.exports.postCreate = function(req, res){
    req.body.id=shortid.generate();

    db.get('usersdb').push(req.body).write();
    res.redirect('/users');//sau khi thuc hien xog se quay lai trang users, k con o trang create
};