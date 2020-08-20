const express = require('express');
const routes = express.Router();
const users = require('./controllers/users');
const admin =  require('./controllers/admin');

routes.get("/", users.index);
routes.get("/sobre", users.sobre);
routes.get("/receitas", users.receitas);
routes.get("/receitas/:index", users.filter);


routes.get("/admin", function(req, res) {

    return res.redirect("/admin/recipes");
});
routes.get("/admin/recipes", admin.index);

routes.get("/admin/recipes/:id", admin.show);

routes.get("/admin/recipes/:id/edit", admin.edit);

module.exports = routes;
