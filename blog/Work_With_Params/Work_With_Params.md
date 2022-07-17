
# Work With Params

You can see this page url "raxmice.in/post/Work_with_Params". I used Params in this page, "Work_with_params" is a params value.


## Screenshots For Better Understanding

![App Screenshot](https://sangamnayak.github.io/raxmiceportfolio/blog/Work_With_Params/St1.png)
When we click on Read more.

This page will open
![App Screenshot](https://sangamnayak.github.io/raxmiceportfolio/blog/Work_With_Params/Screenshot2.png)

Here no path exeisting With "blog/OK". It's creating by params, so there is a problem with Linking to .css and .js files.
 
## Codes
Normally we link
```bash
<link rel="stylesheet" href="css/motivation.css">
<link rel="stylesheet" href="css/skills.css">
<link rel="stylesheet" href="css/projects.css">
<link rel="stylesheet" href="css/contact.css">
<link rel="stylesheet" href="css/footer.css">
<link rel="stylesheet" href="css/navbutton.css">

<script src="js/sunmoon.js"></script>
<script src="js/secone.js"></script>
<script src="js/navbutton.js"></script>
<script src="js/post.js"></script>
```

But in Params page, it can't find these paths.

```bash
<<link rel="stylesheet" href="https://github.io/raxmice/public/css/motivation.css">
<link rel="stylesheet" href="https://github.io/raxmice/public/css/skills.css">
<link rel="stylesheet" href="https://github.io/raxmice/public/css/projects.css">
<link rel="stylesheet" href="https://github.io/raxmice/public/css/contact.css">
<link rel="stylesheet" href="https://github.io/raxmice/public/css/footer.css">
<link rel="stylesheet" href="https://github.io/raxmice/public/css/navbutton.css">

<script src="https://github.io/raxmice/public/js/sunmoon.js"></script>
<script src="https://github.io/raxmice/public/js/secone.js"></script>
<script src="https://github.io/raxmice/public/js/navbutton.js"></script>
<script src="https://github.io/raxmice/public/js/post.js"></script>
```
so we should store .css and .js files on github and link that like this.
