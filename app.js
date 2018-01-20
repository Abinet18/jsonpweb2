const express=require('express');
const ejs=require('ejs');


var app=express();

app.set('view engine','ejs');
app.use(express.static(__dirname+'/public'));

app.get('/',(req,res)=>{
    var message={message:"hello"};
    res.render("index",message);
})

app.listen(8000);
