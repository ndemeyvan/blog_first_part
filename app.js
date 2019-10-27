//jshint esversion:6
const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const _ = require("lodash");


var posts = [{
    title: 'Android win', text: 'Android est le system d\'exploitation de google , qui est le systeme numero un au monde,Android est le system d\'exploitation de google , qui est le systeme numero un au monde,Android est le system d\'exploitation de google , qui est le systeme numero un au monde.'
}, { title: 'AndroidStudio', text: 'Android est le system d\'exploitation de google , qui est le systeme numero un au monde,Android est le system d\'exploitation de google , qui est le systeme numero un au monde,Android est le system d\'exploitation de google , qui est le systeme numero un au monde,Android est le system d\'exploitation de google , qui est le systeme numero un au monde .' }];

var app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.set('view engine', 'ejs');



app.get("/", function (req, res) {
    /*var date = new Date();
    var currentDay = date.getDay();
    var options = {
        weekday: "long",
        day: "numeric",
        month: "long"
    };
    var today = date.toLocaleDateString("en-US", options);*/
    res.render('Home', {
        titleItem: posts

    });


    // __dirname + "/index.html"
});

app.get("/contact", function (req, res) {
    res.render('contact');
    // __dirname + "/index.html"
});

app.get("/post/:postName", function (req, res) {
    var requete = _.lowerCase(req.params.postName);
    posts.forEach(post => {
        if (requete === _.lowerCase(post.title)) {
            res.render('post', {
                titleItem: post.title,
                textItem: post.text
            });
        };
    });

    // __dirname + "/index.html"
});


app.get("/about", function (req, res) {
    res.render('about');
    // __dirname + "/index.html"
})

app.get("/compose", function (req, res) {
    res.render('compose');
    // __dirname + "/index.html"
})


app.post("/compose", function (req, res) {
    var postTitle = req.body.title;
    var postText = req.body.text;
    const post = {
        title: postTitle,
        text: postText
    }
    posts.push(post);
    console.log(post);

    //arayItem.push(inputUser);
    res.redirect("/");
})

app.listen(3000, function (req, res) {
    console.log("hello , le serveur ecoute le port 3000");
})