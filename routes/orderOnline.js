
var express = require('express');
var router = express.Router();

/* GET orderOnline page. */
router.get('/', function(req, res, next) {

    res.send('../orderOnline.html');
});

module.exports = router;