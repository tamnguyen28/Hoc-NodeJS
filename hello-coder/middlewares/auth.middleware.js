var db=require('../db');
//check cookie có được gửi lên hay k
module.exports.requireAuth= function (req, res, next){
    // console.log(req.cookies);
    //khi k co cookie
    if(!req.cookies.userId){
        res.redirect('/auth/login');
        return;
    }
    //kiem tra userId co trong db hay k
    //tim user
    var user = db.get('users').find({id: req.cookies.userId}).value;
    
    //neu k ton tai
    if(!user){
        res.redirect('/auth/login');
        return;
    }
    next();//neu tim thay thi next() de no chay qua middleware tiep theo
};