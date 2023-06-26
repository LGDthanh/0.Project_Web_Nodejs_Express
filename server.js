// Khai báo
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const port = 3000;
const path = require('path');

const router = require('./router/router');
const registerUser = require('./router/register');
const loginUser = require('./router/login');

const userModel = require('./models/User');
// kết nối tới mongodb
const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/thanh', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
app.use(bodyParser.urlencoded({ extended: false})) // Middleware bodyParser
app.use(bodyParser.json())

const checkAdmin = (req, res, next)=>{
    // Kiem tra quyen admin
    req.user.role
    next();
}
const checkDangnhap = (req, res, next)=>{
    // Kiem tra dang nhap

    // accountModel.find()
    // then(data=>{
    //     next()
    // })
    if(dangnhap){
        req.data = user;
        next()
        }else{
        res.json('ban chua dang nhap')
    }
}



app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'login.html'));
  });
app.get('/register', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'register.html'));
  });
app.use('/admin', router);
app.use('/user', router);
app.use('/register', registerUser);
app.use('/login', loginUser);


app.listen(port, function(){
    console.log(`Example app listening at http://localhost:${port}`)
})