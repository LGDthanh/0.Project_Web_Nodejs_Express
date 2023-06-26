const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const userModel = require('../models/User');

router.post('/', function(req, res)  {
    //Là một đối tượng trong Express.js và chứa các thông tin được gửi đến máy chủ từ phía máy khách thông qua yêu cầu HTTP POST hoặc PUT.
    const username = req.body.username;
    const password = req.body.password;
    
    userModel.findOne({
        username: username
    })
    .then(data=>{
        if(data){
            res.status(442).json('Tại khoản đã tồn tại')
        }else{
            bcrypt.hash(password, 10, function(err, hash) {
                // lưu tk mới vào database
                return userModel.create({
                    username: username,
                    password: hash
                })
            .then(data=>{
                res.status(200).json('Đăng kí tài khoản thành công')
            })
            .catch(err=>{
                res.status(500).json('Tạo tài khoản thất bai')
            })
            });    
        }
    })
    .catch(err=>{
        res.status(500).json('Lỗi server')
    })
  });


module.exports = router;
