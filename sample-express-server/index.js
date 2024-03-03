const express = require('express')
const app = express()
const port = 3000
const mongoose = require('mongoose');
const {Schema} = require('mongoose')
mongoose.connect('mongodb://localhost:27017/localDb');
app.use(express.json());

const UserModel = mongoose.model('users', new Schema({ userName: String, password:String }));
app.get('/', (req, res ) => {
    res.send("Hello World!");
})

    app.post( '/', async (req , res) => {
    // console.log("req body send ==>", req.body, req.body.userName === "admin",req.body.password === "admin");

        const response = await UserModel.findOne({userName:req.body.userName, password:req.body.password});


    if(response) {
        res.send('Log in success');
    }else {
        res.status(401);
        res.send('log in fail');
    }
})

    app.listen(port, ()=> {
    console.log(`Example app listening on port ${port}`)
})