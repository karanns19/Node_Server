const express = require('express');
const mongoose = require('mongoose');
const cors = require ('cors');
const model = require("./models/models")

const app = express();
app.use(express.json()); 
app.use(cors());

mongoose.connect("mongodb://localhost:27017/futureik",{
    useNewUrlParser:true,
    useUnifiedTopology: true
}).then(()=> console.log("Database connected"))

app.post("/users/new", async(req, res) =>{
    const user = new model({
        email: req.body.email,
        password: req.body.password,
    });
    user.save(); 
    res.json(user)
})

app.get("/users", async(req, res)=>{
    const users = await model.find()
    res.json(users)
})


app.listen(3001,()=> console.log("Server started"));