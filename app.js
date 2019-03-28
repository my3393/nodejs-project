const express = require('express');


const app = express();
const userRouter = require('./routes/userRouter');

app.use(express.json());
app.use(express.urlencoded({extended:false}));

 app.use((req,res,next)=>{
     res.set('Access-Control-Allow-Origin','*');
     res.set('Access-Control-Allow-Headers','content-type')
     next();
 })

 app.use('/api',userRouter);



app.listen(4000)