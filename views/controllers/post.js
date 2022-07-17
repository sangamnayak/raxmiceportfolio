const express = require('express');
const mongoose = require("mongoose");

const app = express();

//connection
mongoose.connect('mongodb+srv://sangam:rax1998@raxmice.qsx7q.mongodb.net/rxport',{ useNewUrlParser: true });
//now for model we just need to write this
const Post = mongoose.model("post");

const post_res=(req, res)=>{
    const title = req.params.title;
        res.render("post",{title:title});
}
const post_req=(req, res)=>{
    Post.find((err,data)=>{
        if(err){
                console.log(err);
        }
        else{
            console.log(req.body.title);
                // console.log(data);
                const rtitle=req.body.title;
                data.forEach(function(post){
                    const storedtitle = post.title;
                    if(storedtitle === rtitle){
                        res.render("post",{title: post.title});
                            }
                        });
                // res.render("post");
        }
});
// console.log(req.params.title);
//     res.render("post");
        // res.render("post");
}

module.exports={
    post_res,
    post_req
}