var session = require('express-session');
var store = require('express-mysql-session');
//var db = require('./database');

var MySQLStore = store(session);
var sessionStore = new MySQLStore({}, db);

export default session({
  key: 'iskollection',
  secret: 'iskollection',
  resave: true,
  saveUninitialized: true,
  store: sessionStore
});
