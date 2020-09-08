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

routes.get("/admin/recipes/create", admin.create);

routes.get("/admin/recipes/:id", admin.show);

routes.get("/admin/recipes/:id/edit", admin.edit);

routes.post("/admin/recipes", admin.post);

routes.put("/admin/recipes", admin.put);

routes.delete("/admin/recipes", admin.delete);

module.exports = routes;
