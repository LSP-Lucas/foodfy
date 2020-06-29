const express = require('express');
const nunjucks = require('nunjucks');

const server = express();
const recipes = require("./data");

server.use(express.static('public'));

server.set("view engine", "njk");

nunjucks.configure("pages", {
    express: server,
    autoescape: false,
    noCache: true
});

server.get("/", function(req, res) {

    return res.render("index", { recipes });
});

server.get("/sobre", function(req, res) {

    return res.render("sobre");
});

server.get("/receitas", function(req, res) {

    return res.render("receitas", { recipes });
});

server.listen(5000, function() {
    console.log("O servidor ouviu");
});