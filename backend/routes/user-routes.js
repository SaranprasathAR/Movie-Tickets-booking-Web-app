// import express from "express";
const express=require ("express");
const getAllUsers=require("../controllers/user-controllers");
const signup=require("../controllers/user-controllers")
// import { getAllUsers } from "../controllers/user-controllers";
const userRouter = express.Router();
// const router = express.Router();
// module.exports = userRouter;
userRouter.get("/",getAllUsers);
userRouter.post("/signup",signup);
module.exports=userRouter; 