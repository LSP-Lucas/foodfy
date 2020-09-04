const data = require('../data.json');

exports.index = function(req, res) {

    return res.render("admin/index", { recipes: data.recipes });
}

exports.create = function(req, res) {

    return res.render("admin/create");
}

exports.show = function(req, res) {

    const { id } = req.params;

    const foundRecipe = data.recipes.find(function(recipe) {
        return recipe.id == id;
    });

    if(!foundRecipe) return res.send("Receita não encontrada!");

    return res.render("admin/show", { items: foundRecipe });
}

exports.edit = function(req, res) {

    const { id } = req.params;

    const foundRecipe = data.recipes.find(function(recipe) {
        return recipe.id == id;
    });

    if(!foundRecipe) return res.send("Receita não encontrada!");

    return res.render("admin/edit", { items: foundRecipe });
}