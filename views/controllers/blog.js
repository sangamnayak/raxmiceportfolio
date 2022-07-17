const express = require('express');
const bodyparser = require("body-parser");
const mongoose = require("mongoose");

const app = express();

app.use(bodyparser.urlencoded({extended: true}));

//connection
mongoose.connect('mongodb+srv://sangam:rax1998@raxmice.qsx7q.mongodb.net/rxport',{ useNewUrlParser: true });

//for fruit
const post = new mongoose.Schema ({
    title:String,
    description:String,
    dt:String,
    tm:String,
    tag:String
});

//creating collection
const Post = mongoose.model("post", post);

const blog_res=(req, res)=>{
        Post.find((err,data)=>{
                if(err){
                        console.log(err);
                }
                else{
                        // console.log(data);
                        res.render("blog",{posts:data});
                }
        });
        // res.render("blog");
}
const blog_req=(req, res)=>{
        res.redirect("blog");
}

module.exports={
    blog_res,
    blog_req
}