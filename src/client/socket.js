import io from 'socket.io-client';

var socket = io('http://localhost:3001');

socket.on('connect', () => {
  console.log("client connected");
});

export default socket;
