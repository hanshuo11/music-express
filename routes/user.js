var express = require('express');
var router = express.Router();
var user = require('../controllers/user');

// 用户注册
router.post('/userRegister', user.userRegister);
// 登录
router.post('/login', user.login);

router.post('/loginOut', user.loginOut);

router.post('/index', user.index);

// router.post('/register', user.register);




module.exports = router;