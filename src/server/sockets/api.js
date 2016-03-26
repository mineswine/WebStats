var io = require('socket.io')();
var mysql = require('mysql');
var https = require('https')
var connection = mysql.createConnection({
  host     : process.env.MineswineDB,
  user     : process.env.MineswineDBUser,
  password : process.env.MineswineDBPass,
  database : process.env.MineswineDBName
});

connection.connect();

io.on('connection', function(socket) {

  socket.on('load_leaderboard', function(data) {
    var query = 'SELECT * FROM mcrl_playerstats ORDER BY '+ connection.escapeId(data.sort) +' DESC LIMIT ' + connection.escape(data.index) + ', ' + connection.escape(data.count);
    connection.query(query, function(err, rows, fields) {
      socket.emit('payload_leaderboard', { data: rows});
    });
  });

  socket.on('load_profile', function(data) {
    var player = data.playername;
    https.get('https://us.mc-api.net/v3/uuid/' + player, function(res) {
      if (res.statusCode === 200) {
        var body = '';
        res.on('data', (chunk) => {
          body += chunk;
        });
        res.on('end', () => {
          var query = 'SELECT * FROM mcrl_playerstats WHERE uuid="'+ JSON.parse(body).full_uuid + '"';
          connection.query(query, function(err, rows, fields) {
            if (!err) {
              socket.emit('payload_profile', {
                profile: rows[0]
              });
            }
          });
        });
      }
    });
  });

  socket.on('player_search', function(data) {
    var search = data.search;
    https.get('https://us.mc-api.net/v3/uuid/' + search, function(res) {
      if (res.statusCode === 200) {
        var body = '';
        res.on('data', (chunk) => {
          body += chunk;
        });
        res.on('end', () => {
          var query = 'SELECT * FROM mcrl_playerstats WHERE uuid="'+ JSON.parse(body).full_uuid + '"';
          connection.query(query, function(err, rows, fields) {
            if (!err) {
              if (rows.length > 0) {
                socket.emit('payload_search', {
                  exists: true,
                  player: JSON.parse(body).name
                });
              } else {
                socket.emit('payload_search', {
                  exists: false
                });
              }
            } else {
              console.log("WARNING: PLAYER DOES NOT EXIST!");
            }
          });
        });
      } else {
        socket.emit('payload_search', {
          exists: false
        });
      }
    });
  });



  socket.on('disconnect', function() {

  });
});

io.listen(3001);
