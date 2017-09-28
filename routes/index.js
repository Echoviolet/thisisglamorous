/*
* 
* 路由控制
*/

var config = require('../config/app.json');

module.exports = function (app) {
    app.get('/',function (req,res) {
        res.render('index',config);
    });

    app.get(/^(\/common\/(\w+)(\/)?)?$/, function (req, res) {
        res.render(req.params[1], app_config);
    });

};