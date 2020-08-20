const data = require('../data');
let recipeIndex;

exports.index = function(req, res) {

    return res.render("admin/index", { recipes: data });
}

exports.show = function(req, res) {
    const recipes = [...data];

    recipeIndex = req.params.id;

    return res.render("admin/show", { items: recipes[recipeIndex - 1] });
}

exports.edit = function(req, res) {
    const recipes = [...data];
    
    return res.render("admin/edit", { items: recipes[recipeIndex - 1] });
}