var db = require('./db');
var dbProcess=require('../public/javascripts/common.js');

// exports.queryUser = function (callback) {
//     var sql = "SELECT * from t_user";
//     db.query(sql, [], callback);
// }

exports.uploadImg = function (store_imgUrl,store_id, callback) {
    var sql='insert into t_store_inf_imgUrl(store_imgUrl,store_id) values(?,?)';
    db.query(sql, [store_imgUrl,store_id],callback);
};

exports.storeRegister = function (data, callback) {
    var sql = 'insert into t_store('+dbProcess.dbObject(data)+') values(?,?,?,?,?,?,?,?,?,?,?,?,?,?)';
    db.query(sql,dbProcess.dbGetArr(data), callback);
};

