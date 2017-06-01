'use strict';

var http = require('http');
var express = require('express');

const app = express();

app.use( (request, response, next) =>{
	console.log('In middleware 1');
	response.write('HEADER ');
	next();
	console.log('Out of Middleware 1');
});

app.use((request, response, next) => {
	console.log('In Middleware 2');
	response.write('OTHER ')
	next();
	console.log('Out of Middleware 2');
});

app.get('/', (request, response) =>{
	response.end('Hello World.');
	console.log('In Handler');
});

const server = new http.Server(app);

const port = 3010;
server.listen(port, () => {
	console.log('Server started on port ' + port);
});