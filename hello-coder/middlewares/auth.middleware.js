var db=require('../db');
//check cookie có được gửi lên hay k
module.exports.requireAuth= function (req, res, next){
    // console.log(req.cookies);
    //khi k co cookie
    console.log( req.signedCookies.userId);
    if(!req.signedCookies.userId){
        res.redirect('/auth/login');
        return;
    }
    //kiem tra userId co trong db hay k
    //tim user
    var user = db.get('usersdb').find({
        id: req.signedCookies.userId
    }).value;

    console.log(user);
    
    //neu k ton tai
    if(!user){
        res.redirect('/auth/login');
        return;
    }
    
    res.locals.user = user;

    next();//neu tim thay thi next() de no chay qua middleware tiep theo
};