require("dotenv").config();

const express = require('express');
const { default: mongoose } = require("mongoose");

const PORT = process.env.PORT || 3002;
const uri = process.env.MONGO_URI;

const app = express();


app.get("/addHoldings",async(req , res )==>{
    let tempHoldings = {
        name
    }
})

app.listen(3002,()=>{
    console.log("The server is Running at port 3002")
    mongoose.connect(uri);
    console.log("Database is connected");
})