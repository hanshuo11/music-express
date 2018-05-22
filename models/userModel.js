var db = require('./db');

exports.queryUser = function(callback) {
    var sql = "SELECT * from user";
    db.query(sql, [], callback);
}

exports.findUser = function(username, callback) {
    var sql = 'select * from user where username=?';
    db.query(sql, [username], callback);
};

exports.register = function(username, password, callback) {
    var sql = 'insert into user(username, password) values(?,?)';
    db.query(sql, [username, password], callback);
};