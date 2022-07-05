const mongoose = require("mongoose");

//connection
mongoose.connect("mongodb+srv://sangam:rax1998@raxmice.qsx7q.mongodb.net/rxport",{ useNewUrlParser: true });

//for fruit
const sectwo = new mongoose.Schema ({
    img: String,
    chead: String,
    description:String,
    alt:String
});
//for fruit
const thoght = new mongoose.Schema ({
    lines:String,
    author:String
});
const project =new mongoose.Schema({
    pname:String,
    pdes:String,
    Ldemo:String,
    git:String,
    img:String,
    html:String, css:String, js:String, firebase:String, mongodb:String, api:String, node:String, bootstrap:String
});
//creating collection
const Card = mongoose.model("card", sectwo);
const Motiv = mongoose.model("motiv", thoght);
const Proj = mongoose.model("proj", project);

const index=(req, res)=>{
        Card.find((err,data)=>{
            if(err){console.log(err)}
            else{
                Motiv.find((err, motiv)=>{
                    Proj.find((err, proj)=>{

                        // console.log(proj[2]);
                        let codes = JSON.stringify(proj[0]);
                        // console.log(codes);
                        codes = codes.substring(codes.indexOf('[')+1,codes.lastIndexOf(']'));
                        // console.log(typeof codes);
                        codes=codes.replaceAll('"', '');
                        codes=codes.replaceAll(',', ' ');
                        codes = codes.split(" ");
                        // console.log(codes);
                        // console.log(codes[3]);

                        const mode = req.cookies;
                        // console.log(mode.mode);
                        if(mode.mode === undefined){console.log("creating cookies"); res.cookie("mode", "dark");}
                        res.render("index",{data:data, motiv:motiv, proj:proj});
                    })
                    // res.render("index",{data:data, motiv:motiv});
                });
                // res.render("index",{data:data});
            }
    });
}

module.exports={
    index
}