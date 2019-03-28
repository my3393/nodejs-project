const express = require('express');
const userModel = require('../models/userModels');

const bcrypt = require('bcrypt');
const router = express.Router();

router.route('/user').post((req,res)=>{
  //注册
  bcrypt.hash(req.body.password,10).then(saltPassword=>{
       let user = new userModel({
       username : req.body.username,
       password: saltPassword,
       })
    user.save().then(()=>{
        res.send({
            code:0,
            msg:'注册成功'
        })
    }).catch(error=>{
        res.send({
            code:-1,
            msg:'注册失败'
        })
    })
    
  })
  


}).get((req,res)=>{
    //get 代表登录
})


module.exports = router;