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
    let username = req.query.username;
    let password = req.query.password;

    userModel.findOne({
        username:username
    }).then(data=>{
        if (data) {
             //前端密码和数据库密码作比较
             console.log()
            bcrypt.compare(password,data.password,function(err,isok){

                if (err) {
                    res.send({
                        code:-2,
                        msg:'代码错误'
                    })
                } else {
                    if (isok) {
                        res.send({
                            code:0,
                            msg:'登录成功'
                        })
                    } else {
                        res.send({
                            code:-2,
                            msg:'密码错误'
                        })
                    }
                    
                }
            })

        } else {
            res.send({
                code:-1,
                msg:'用户名不存在'
            })
        }
    })



})


module.exports = router;