const  mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/hello',{
    useNewUrlParser:true
}).then(()=>{
    console.log('连接数据库成功')
}).catch(error=>{
    console.log('连接数据库失败')
})

module.exports = mongoose;