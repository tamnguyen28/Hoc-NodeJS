var shortid= require('shortid');
var db = require('../db');
//Kiểm tra xem có tồn tại cookie
//tạo sessionId cho cookie
module.exports = function(req, res, next) {
    if(!req.signedCookies.sessionId){
        var sessionId = shortid.generate();
        res.cookie('sessionId', sessionId,{
            signed: true
        });
        db.get('sessions').push({
            id:sessionId
        }).write();
    }
    next(); //neu co cookie thi no se chay luon k can qua dong if
}