
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    console.log("inside callRegistrationPage.js");
    res.send('../menu.html');
});

module.exports = router;