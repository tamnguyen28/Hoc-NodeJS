var express = require('express');//Nạp thư viện express
var app = express();
var port = 3000;
// var bodyParser=require('body-parser');

var cookieParser = require('cookie-parser');
app.use(cookieParser('asdkaodkoas10230'));

var userRouter = require('./routes/user.route');
var authRoute = require('./routes/auth.route');

var authMiddleware = require('./middlewares/auth.middleware');

app.set('view engine', 'pug');
app.set('views', './views');

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

app.use(express.static('public'));

app.get('/', function(req, res){
    // res.send('<h1/>Hello Happy New Year!</h1><a href="/users">User List</a>'); 
    //users trong thẻ a phaỉ giống vs dòng 13 app.get ('/users')[app.send]
    res.render('index',{
        name: 'AAA'
    }); // dùng render phải dùng file index.pug để định nghĩa
});

app.use('/users', authMiddleware.requireAuth, userRouter);
app.use('/auth', authRoute);

app.listen(port, function() {
    console.log('Server listening on port ' + port);
});