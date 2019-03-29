const db = require('../config/db');

 const schema = db.Schema({
     username: String,
     password : String,
     nickName : String
 })

 module.exports = db.model('user',schema);