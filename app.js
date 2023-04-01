const port =process.env.PORT || 3000;
const express =require('express');
const ejs=require('ejs');
const path =require('path');


const app=express();

app.set('view engine','ejs');
app.use('/public',express.static(path.join(__dirname,'public')));
app.use('/css',express.static(path.join(__dirname,'./node_modules/bootstrap/dist/css')));
app.use('/js',express.static(path.join(__dirname,'./node_modules/bootstrap/dist/js')))

app.get('/',(req,res)=>{
    res.render('home');
})

app.listen(port,()=>{
    console.log(`listening on the port ${port}`)
})