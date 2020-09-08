const data = require('../data.json');
const fs = require('fs');

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

exports.post = function(req, res) {

    const keys = Object.keys(req.body);

    for(key of keys) {

        if(req.body[key] == "") return res.send("Preencha todos os campos!");

    }

    let { img_url, title, author, ingredients, preparation, information } = req.body;

    const id = Number(data.recipes.length + 1);

    data.recipes.push({
        id,
        image: img_url,
        title: "Teste",
        author: "O autor",
        ingredients,
        preparation,
        information
    });

    fs.writeFile("data.json", JSON.stringify(data, null, 4), function(err) {
        if(err) return res.send("Erro na gravação!");

        return res.redirect("/admin/recipes");
    });

}

exports.put = function(req, res) {

    const { id } = req.body;

    let index = 0;

    const foundRecipe = data.recipes.find(function(recipe, foundIndex) {
        if(id == recipe.id) {
            index = foundIndex;
            return true;
        }
    });

    console.log(foundRecipe)

    if(!foundRecipe) return res.send("Receita não encontrada!");

    const recipe = {
        ...foundRecipe,
        ...req.body,
        id: Number(req.body.id)
    }

    data.recipes[index] = recipe;

    fs.writeFile("data.json", JSON.stringify(data, null, 4), function(err) {
        if(err) return res.send("Erro ao editar a receita!");

        return res.redirect(`/admin/recipes/${id}`);
    });
}

exports.delete = function(req, res) {

    const { id } = req.body;

    const filteredTeachers = data.recipes.filter(function(recipe) {
        return recipe.id != id;
    });

    data.recipes = filteredTeachers;

    fs.writeFile("data.json", JSON.stringify(data, null, 4), function(err) {
        if(err) return res.send("Erro ao excluir a recita!");

        return res.redirect("/admin/recipes");
    });

}