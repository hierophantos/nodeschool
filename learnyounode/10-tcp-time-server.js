var net = require('net'),
    bl = require('bl'),
    strftime = require('strftime');

var server = net.createServer(function(socket) {
  socket.write(strftime('%F %H:%M'));
  socket.end();
})
server.listen(process.argv[2] || 8000);




