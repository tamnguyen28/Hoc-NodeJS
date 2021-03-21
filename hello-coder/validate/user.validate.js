module.exports.postCreate = function(req, res, next){
    var errors=[];
    if(!req.body.name){
        errors.push('Name is required');
    }
    if(!req.body.phone){
        errors.push('Phone is required');
    }
    if(errors.length)//Neu nhu nos k cos gi
    {
        res.render('users/create',{
           error: errors,
           values: req.body
        });
        return;
    }
    next(); //nếu quên next(); thì trình duyệt sẽ load mãi đến ki timeout thì sẽ báo lỗi
}