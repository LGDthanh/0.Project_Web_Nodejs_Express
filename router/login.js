const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const userModel = require('../models/User')

router.post('/', (req, res)=>{
    var username = req.body.username
    var password = req.body.password

    userModel.findOne({
        username: username,
    })
    .then(data=>{
        // Load hash from your password DB.
    bcrypt.compare(password, data.password, function(err, result) { //phương thức compare của bcrypt để ss
        //console.log(result);
    if(result){
        
        res.json('Đăng nhập thành công')
    }else{
        res.json('Đăng nhập thất bại')
    }
});
      
    })
    .catch(err=>{
        res.status(500).json('Lỗi server')

    })
})
module.exports = router;