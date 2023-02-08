const express = require("express");
const noteRouter = require("../routes/noteRoutes");
const userRouter = require("../routes/userRoutes");
const app = express();

const mongoose  = require("mongoose");


app.use("/users",userRouter);
app.use("/note", noteRouter);


app.get("/",(req,res) =>{
res.send("hello");
});

mongoose.connect("mongodb+srv://dipesh:dipesh@cluster0.ntvva27.mongodb.net/?retryWrites=true&w=majority")
.then (()=>{
    app.listen(5000,()=>{
        console.log("server started on port no 5000");
    });
})
.catch((error)=>{
    console.log(error);
})
   

