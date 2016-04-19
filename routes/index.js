var express = require('express');
var router = express.Router();

var socket = require('../config/socket');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'WDBridge - Web Daemon Bridge' });

  var data = {hello : '9',recycle: 1,last_check : new Date(),next_check :new Date()};
  socket.emit('addChecks', data );
  console.log(new Date());
});

module.exports = router;
