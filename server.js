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

server.get("/receitas/:index", function (req, res) {
    const receipts = [...recipes];

    const recipeIndex = req.params.index;

    return res.render("descricao-receita", { items: receipts[recipeIndex - 1] });
  
});

server.listen(5000, function() {
    console.log("O servidor ouviu");
});


