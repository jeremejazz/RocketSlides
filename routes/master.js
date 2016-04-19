var express = require('express');
var router = express.Router();
var basicAuth = require('basic-auth');

 

/* Authentication middleware */
router.use( function auth(req, res, next) {
  function unauthorized(res) {
    res.set('WWW-Authenticate', 'Basic realm=Authorization Required');
    return res.send(401);
  };

  var user = basicAuth(req);

  if (!user || !user.name || !user.pass) {
    return unauthorized(res);
  };

  if (user.name === 'admin' && user.pass === 'admin') {
    return next();
  } else {
    return unauthorized(res);
  };
} );

router.get('/', function(req, res) {
  res.send("Yessss... Master!");
});


module.exports = router;
