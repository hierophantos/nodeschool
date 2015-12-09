var http = require('http'),
    bl   = require('bl');

var output = [];
var responseCount = 0;

http.get(process.argv[2], function (res) {
  res.pipe(bl (function (err, data) {
    if (err)
      return console.error(data);
    data = data.toString();
    output[0] = data;
    responseCount ++;
    if (responseCount >= 3)
      console.log(output.join('\n'))
    

  }));
});

http.get(process.argv[3], function (res) {
  res.pipe(bl (function (err, data) {
    if (err)
      return console.error(data);
    data = data.toString();
    output[1] = data;
    responseCount ++;
    if (responseCount >= 3)
      console.log(output.join('\n'))
    

  }));
});

http.get(process.argv[4], function (res) {
  res.pipe(bl (function (err, data) {
    if (err)
      return console.error(data);
    data = data.toString();
    output[2] = data;
    responseCount ++;
    if (responseCount >= 3)
      console.log(output.join('\n'))
    

  }));
});


// Here's the official solution in case you want to compare notes:
// ─────────────────────────────────────────────────────────────────────────────────────

//     var http = require('http')
//     var bl = require('bl')
//     var results = []
//     var count = 0
//     function printResults () {
//       for (var i = 0; i < 3; i++)
//         console.log(results[i])
//     }
//     function httpGet (index) {
//       http.get(process.argv[2 + index], function (response) {
//         response.pipe(bl(function (err, data) {
//           if (err)
//             return console.error(err)

//           results[index] = data.toString()
//           count++

//           if (count == 3)
//             printResults()
//         }))
//       })
//     }

//     for (var i = 0; i < 3; i++)
//       httpGet(i)
// 
