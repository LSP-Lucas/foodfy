const data = require('../data');

exports.index = function(req, res) {

    return res.render("admin/index", { recipes: data });
}