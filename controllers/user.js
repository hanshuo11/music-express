var userModel = require('../models/userModel')
var session = require('express-session');

exports.index = function(req, res, next) {
    userModel.queryUser(function(row) {
        res.json(row);
        // res.cookie("yuyu", row[0], {maxAge: 60 * 1000});
        // res.send("cookie ok")
    });
}

exports.loginOut = function(req, res, next) {
    res.clearCookie('userLogin', {});
    res.send('loginOut')
}

exports.login = function(req, res, next) {
    var username = req.body.username;
    var password = req.body.password;
    userModel.findUser(username, function(row) {
        if (row[0]) {
            console.log(row[0].password)
            if (password === row[0].password) {
                res.cookie('userLogin', row[0], { expires: new Date(Date.now() + 900000), httpOnly: true });
                let data = {
                    resStatus: "success",
                    cookie: row[0]
                }
                res.send(data);
                console.log("success")
            } else {
                let data = {
                    resStatus: "fail",
                }
                res.send(data);
            }
        } else {
            let data = {
                resStatus: "fail",
            }
            res.send(data);
        }
    });
}

// 用户注册
exports.userRegister = function(req, res, next) {
    var username = req.body.username;
    var password = req.body.password;
    var repassword = req.body.repassword;
    if (password === repassword) {}
    userModel.findUser(username, function(row) {
        if (row[0]) {
            res.send("already have");
        } else {
            userModel.register(username, password, function(row) {
                console.log(row);
                if (row) {
                    res.send("success");
                } else {
                    res.send("fail");
                }
            });
        }
    });
}