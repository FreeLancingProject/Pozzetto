var express = require('express');
var router = express.Router();

/* GET index page. */
router.get('/', function(req, res, next) {
  res.render('index.html');
});

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('home.html');
});

/* GET gallery page. */
router.get('/', function(req, res, next) {
    res.render('gallery.html');
});


module.exports = router;
