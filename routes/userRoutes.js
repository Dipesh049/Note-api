const express = require("express");
const userRouter = express.Router();

userRouter.post("/signup",(req,res)=>{
  res.send("signup");
})

userRouter.post("/signin",(req,res)=>{
    res.send("signin");
})

module.exports = userRouter;