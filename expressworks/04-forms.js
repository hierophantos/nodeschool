var express = require('express'),
    app     = express();
    // connect = require('connect'),
var jade    = require('jade');
var path    = require('path');
var bp      = require('body-parser');

app.use(bp.urlencoded());

app.use(function (req, res, next) {
  if (req.body.str == 'What are you really?')
    req.body.str = "A smokey mirror";
  console.log(req)
  next();  
});

app.set('views', process.argv[3] || path.join(__dirname, 'templates'));



app.set('view engine', 'jade');
app.get('/form-page', function (req, res) {
  res.render('form-page', {});

});

app.post('/form', function (req, res) {
  res.send(req.body.str.split('').reverse().join(''));
  
});

app.listen(process.argv[2] || 8080);

