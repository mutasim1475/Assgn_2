var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/home', function(req, res, next) {
  res.render('index', {title: 'Home',
  section: 'This is section'});
});


/* GET about page. */
router.get('/about', function(req, res, next) {
  res.render('index', {title: 'About'});
});

/* GET services page. */
router.get('/services', function(req, res, next) {
  res.render('index', {title: 'Services'});
});

/* GET contact us page. */
router.get('/contact', function(req, res, next) {
  res.render('index', {title: 'Contact'});
});

module.exports = router;
