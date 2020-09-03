const data = require('../data.json');

exports.index = function(req, res) {

    return res.render("users/index", { recipes: data.recipes });
}

exports.sobre = function(req, res) {

    return res.render("users/sobre");
}

exports.receitas = function(req, res) {

    return res.render("users/receitas", { recipes: data.recipes });
}

exports.filter = function (req, res) {
    
    const receipts = [...data.recipes];

    const recipeIndex = req.params.index;

    return res.render("users/descricao-receita", { items: receipts[recipeIndex - 1] });
}