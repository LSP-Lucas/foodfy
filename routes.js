const express = require('express');
const routes = express.Router();
const users = require('./controllers/users');
const recipes =  require('./controllers/admin');

routes.get("/", users.index);
routes.get("/sobre", users.sobre);
routes.get("/receitas", users.receitas);
routes.get("/receitas/:index", users.filter);




routes.get("/admin", function(req, res) {

    return res.redirect("/admin/recipes");
});

routes.get("/admin/recipes", recipes.index);


module.exports = routes;
