var express = require('express'),
    app     = express(),
    path    = require('path'),
    stylus  = require('stylus');

// auto convert styl files to css in specified dir
app.use(require('stylus').middleware(process.argv[3] || path.join(__dirname,'/public/')));

// static files
app.use(express.static(process.argv[3] || path.join(__dirname, 'public')));

// start server
app.listen(process.argv[2] || 8080);






