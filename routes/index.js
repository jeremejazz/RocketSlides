var express = require('express');
var router = express.Router();

/* GET home page. */

router.get('/', function(req, res) {
  res.render('slide', { title: 'My Presentation' });
});



module.exports = router;
