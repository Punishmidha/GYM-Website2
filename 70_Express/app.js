// hmne jo lecture 67 me kia tha na is else lgaya alag alah likha ki \  aaye to is file me jao ya \home aaye to isme jao ye sab krne k liye tyar hai express
// express sare routing handle krta h if else vgera...used for simplicity of wbe dev 
// lec 71

// import express module
const express = require("express");

// make an app of express
const app = express();
const port = 80;
const path = require("path");

// serving static files  
app.use('/static' , express.static('static'))

// set the template engine as pug
app.set('view engine' , 'pug');

// set the view directory
app.set('views' , path.join(__dirname,'views'));

// our pug demo endpoint
app.get("/demo",(req,res)=>{
    res.status(200).render('demo', { title: 'Hey punish', message: 'Hello there! thaks to tell me how to use pug' })

});


// jab bhi koi mere website ki is slash pe jata h tab  mai ye function run krva duga....ye 2 argument leta hai..request and response
app.get("/",(req,res)=>{
    res.status(200).send("This is my homepage of my express app with punish")
});

app.get("/about",(req,res)=>{
    res.send("This is about of my express app with punish");
});

app.post("/about",(req,res)=>{
    res.send("TThis is about of my express app with punish");
});

// ki ap konse port pe listen krna chahte hai
app.listen(port,()=>{
    console.log(`the applicatuon started successfully on port ${port}`);
})

// ye krne bad terminal me node or file ka name app.js likhdo 
// or fir postman me jakr localhost:80 ikhdo..browser me likhne pe bhio aayega but ye bad me kam aayega jab hme  post req put re   q marni pde gi..key and value dekr 






