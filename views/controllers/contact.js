const express = require('express');
const bodyparser = require("body-parser");
const mongoose = require("mongoose");

const app = express();

app.use(bodyparser.urlencoded({extended: true}));

//connection
mongoose.connect('mongodb+srv://sangam:rax1998@raxmice.qsx7q.mongodb.net/rxport',{ useNewUrlParser: true });

//for fruit
const contact = new mongoose.Schema ({
    fullname:String,
    email:String,
    tel:Number,
    message:String
});

//creating collection
const Cont = mongoose.model("cont", contact);

const contact_res=(req, res)=>{
        res.render("contact");
}
const contact_req=(req, res)=>{
        const fname=req.body.fullname;
        const email=req.body.email;
        const tel=req.body.tel;
        const message=req.body.message;
        if(email !== " "){
        const p1 = new Cont({
                    fullname:fname,
                    email:email,
                    tel:tel,
                    message:message
                })
                p1.save();
        }
        res.redirect("contact");
}

module.exports={
    contact_res,
    contact_req
}