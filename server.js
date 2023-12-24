const express = require('express');

const app = express();


app.listen(3000,()=>{
    console.log("Server se connect ho gaya");
})

app.get('/localhost',(req,res,next)=>{
    console.log("first middleware")
    next();
},(req,res,next)=>{
    console.log("second middleware");
    next();
},(req,res)=>{
    console.log("yaha");
    res.send("localhost");
})

app.get('/',(req,res)=>{
    res.json({
        status:"ho to gaya"
    })
})