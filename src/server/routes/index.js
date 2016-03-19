// var ReactServer = require('react-dom/server');
var express = require('express');
var router = express.Router();

//Load Index Page Component


router.use('/', function(req, res) {
  res.render('index');
});



module.exports = router;
