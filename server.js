'use strict';

var http = require('http');
var express = require('express');
var socketIo = require('socket.io');

const app = express();

// browser -> node -> express -> M1 -> M2 -> M3 -> handler
//         <-       <-         <-   <-    <-    <-

app.set('view engine', 'pug');

app.use(express.static('./public'));

app.get('/', (request, response) =>{
	response.end('Hello World.');
});

app.get('/home', function(request, response){
	response.render('index', {title: 'This is my title.'})
});

const server = new http.Server(app);
const io = socketIo(server);

io.on('connection', function(socket) {
	console.log('Client Connected');
	socket.on('chat:add', function(data) {
		console.log(data);
		io.emit('chat:added', data)
	});
});

const port = 3010;
server.listen(port, () => {
	console.log(`Server started on port ${port}`);
});