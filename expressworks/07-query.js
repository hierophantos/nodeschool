var express = require('express'),
    app     = express(),
    crypto  = require('crypto');

app.get('/search', function (req, res) {
  res.send(req.query);
});

app.listen(process.argv[2] || 8080);

