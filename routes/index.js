var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/home', function(req, res, next) {
  res.render('index', {title: 'Home',
  section: 'This is section'});
});


/* GET about page. */
router.get('/about', function(req, res, next) {
  res.render('about', {title: 'About'});
});

/* GET Projects page. */
router.get('/projects', function(req, res, next) {
  res.render('projects', {title: 'Projects'});
});

/* GET contact us page. */
router.get('/contact', function(req, res, next) {
  res.render('contact', {title: 'Contact'});
});

module.exports = router;
