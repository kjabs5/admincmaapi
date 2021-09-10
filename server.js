import express from 'express'
import helmet from 'helmet';
//const express = require("express");

const app=express();
const PORT = process.env.PORT || 8000

// middleware

app.use(helmet());
app.use("/",(req,res) => {
    res.json("Hello world")
});
app.listen(PORT,(error)=>{
    if(error)
    {
        return console.log(error)
    }
    console.log(`server is running at ${PORT}`);
})

console.log('Hello');