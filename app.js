
var express = require('express');
var app = express();
var serv = require('http').Server(app);

app.get('/', function(req, res) {
	res.sendFile(__dirname + '/client/index.html');
});
app.get('/pic', function(req, res) {
	res.sendFile(__dirname + '/client/pik.jpg');
});
app.use('/client', express.static(__dirname + '/client'));

serv.listen(2000);
console.log('Starting Node Server');

var io = require('socket.io')(serv,{});
io.sockets.on('connection', function(socket){
	console.log('socket connection');
	socket.on('happy', function(){
		console.log('happy');
	});
});