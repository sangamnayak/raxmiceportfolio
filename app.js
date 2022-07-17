const express = require('express');
const bodyparser = require('body-parser');
const cookieParser = require("cookie-parser");
const index = require("./views/routes/index");
const blog = require("./views/routes/blog");
const post = require("./views/routes/post");
const err = require("./views/routes/err");
const contact = require("./views/routes/contact");

const app = express();

app.use(bodyparser.urlencoded({extended: true}));

app.set('view engine','ejs');
app.use(express.static("public"));
app.use(cookieParser());

//routes
app.use(index);

app.use(blog);

app.use(post);

app.use(contact);

app.use(err);

//calling a server
app.listen(process.env.PORT || 3000);
