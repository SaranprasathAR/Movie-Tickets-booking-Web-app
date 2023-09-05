// import express from "express";
// import mongoose from "mongoose";
const express=require ("express");
const mongoose=require("mongoose");
const bodyParser=require('body-parser')
const userRouter=require("./routes/user-routes"); 

const app=express();
app.use(bodyParser.json());
app.use("/user",userRouter);
app.use(express.json());
// app.use(app.router);
// routes.initialize(app);

mongoose.connect(
    'mongodb+srv://admin:Ckv67zy8nOMdwtTc@cluster0.a8oqatb.mongodb.net/?retryWrites=true&w=majority'
).then(()=>
app.listen(5000, ()=>
    console.log('Connected')
)
).catch((e)=> console.log(e));

