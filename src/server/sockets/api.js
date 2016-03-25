var io = require('socket.io')();
var mysql = require('mysql');
var connection = mysql.createConnection({

});

connection.connect();

io.on('connection', function(socket) {

  socket.on('load_top_elo', function(data) {
    var index = data.index;
    connection.query('SELECT * FROM mcrl_playerstats ORDER BY elo DESC LIMIT ' + index + ', 20;', function(err, rows, fields) {
      console.log("Sending", rows);
      socket.emit('receive_top_elo', { data: rows});
    });
  });

  socket.emit('chat', 'weepo');
  socket.on('disconnect', function() {

  });
});

io.listen(3001);

// MineswineDB=209.222.26.2
// MineswineDBName=mineswineapi
// MineswineDBUser=root
// MineswineDBPass=password
