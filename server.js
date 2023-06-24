// Khai báo
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = 3000;
const path = require('path');
const router = require('./router/router');
const checkAdmin = (req, res, next)=>{
    // 
    if(dangnhap){
        user.role = 'admin'
        next()
        }else{
        res.json('ban chua dang nhap')
    }
}
const checkDangnhap = (req, res, next)=>{
    // 
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

app.get('/', (req, res) => res.send('Hello World!'))
app.use('/admin/', checkAdmin, router);
app.use('/user/',checkDangnhap, router);

app.listen(port, function(){
    console.log(`Example app listening at http://localhost:${port}`)
})