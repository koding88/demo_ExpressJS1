const { json } = require('body-parser');
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

//1. get method to render login page for form input
router.get('/login', (req, res) => {
  res.render('login');
})
//2. use post method to receive input form form
router.post('/login', (req, res) => {
  //get data input form
  var data = req.body
  var username = data.username
  var password = data.password
  //1. Return data in console
  // console.log(username, password)

  //2. Return json data
  // res.send(data);

  if (username == "admin" && password == "123456") {
    res.send("<h1>Login passed</h1>")
  } else {
    res.send("<h1>Login failed</h1>")
  }
});


router.get('/input', (req, res) => {
  res.render('add_student')
})

router.post('/output', (req, res) => {
  res.render('view_student', { student: req.body })
})



module.exports = router;
