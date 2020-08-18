const data = require('../data');

exports.index = function(req, res) {

    return res.render("admin/index", { recipes: data });
}

exports.show = function(req, res) {
    const recipes = [...data];

    const recipeIndex = req.params.index;

    return res.render("admin/show", { items: recipes[recipeIndex - 1] });
}