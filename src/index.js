const express = require("express");
const noteRouter = require("./routes/noteRoutes");
const userRouter = require("./routes/userRoutes");
const app = express();
const dotenv = require("dotenv");
const cors = require("cors");

dotenv.config();

const mongoose  = require("mongoose");

app.use(express.json());

app.use(cors());

//test middleware
// app.use((req,res,next)=>{
//     console.log("HTTP Method - " + req.method + ",URL - " + req.url);
//     next();
// });

app.use("/users",userRouter);
app.use("/note", noteRouter);


app.get("/",(req,res) =>{
res.send("Notes Api Created By Dipesh Patel");
});


const PORT = process.env.PORT || 5000;

mongoose.connect( process.env.MONGO_URL)
.then (()=>{
    app.listen(PORT,()=>{
        console.log("server started on port no "+ PORT);
    });
})
.catch((error)=>{
    console.log(error);
})
   

