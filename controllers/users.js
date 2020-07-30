const recipes = require('../data');

exports.index = function(req, res) {

    return res.render("users/index", { recipes });
}

exports.sobre = function(req, res) {

    return res.render("users/sobre");
}

exports.receitas = function(req, res) {

    return res.render("users/receitas", { recipes });
}

exports.filter = function (req, res) {
    
    const receipts = [...recipes];

    const recipeIndex = req.params.index;

    return res.render("users/descricao-receita", { items: receipts[recipeIndex - 1] });
}