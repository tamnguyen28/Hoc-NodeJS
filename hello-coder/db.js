var low = require('lowdb');
var FileSync = require('lowdb/adapters/FileSync');
var adapter=new FileSync('db.json');

db=low(adapter);
db.defaults({usersdb: [], sessions:[] })
  .write();

module.exports = db;