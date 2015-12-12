var express = require('express'),
    app     = express(),
    crypto  = require('crypto');

app.put('/message/:NAME', function (req, res) {
  res.send(crypto
          .createHash('sha1')
          .update(new Date().toDateString() + req.params.NAME)
          .digest('hex'));
});

app.listen(process.argv[2] || 8080);

