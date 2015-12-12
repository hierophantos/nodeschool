var express = require('express'),
    app     = express(),
    fs      = require('fs');

app.get('/books', function (req, res) {
  fs.readFile(process.argv[3] || "books.json", function(err, data){
    if (err)

    {console.error(err)
     res.status(500).send("ERROR: " + JSON.stringify(err))
     return;
    }
    
    res.json(JSON.parse(data.toString()));
    console.log(Object.keys(res));
  });
  
});

app.listen(process.argv[2] || 8080);

