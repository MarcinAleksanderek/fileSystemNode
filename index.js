var fs = require('fs');
var colors = require('colors');
/*
fs.readFile('./tekst.txt', 'utf-8', function(err, data) {
	fs.readdir('./', 'utf-8',function(err, folderStructure){
		console.log(folderStructure);
		folderStructure.forEach(element => {
			var elem = '\n'+ element;
			fs.appendFile('./files.txt', elem, function(error) {
				if (err) throw err;
			});
		});
	});
	console.log('Dane przed zapisem!'.blue);
	console.log(data);
	fs.appendFile('./tekst.txt', 'A tak wyglądają po zapisie!', function(err) {
		if (err) throw err;
		console.log('Zapisano!'.blue);
		fs.readFile('./tekst.txt', 'utf-8', function(err, data) {
			console.log('Dane po zapisie'.blue)
			console.log(data);
		});
	});
});*/

var http = require('http');

var server = http.createServer();

server.on('request', function (request, response) {
	response.setHeader("Content-Type", "text/html; charset=utf-8");
	if (request.method === 'GET' && request.url === '/') {
		response.setHeader("Content-Type", "text/html; charset=utf-8");
		fs.readFile('./index.html', 'utf-8', function(err, data) {
			response.write(data);
			response.end();
		});
	} else {
			fs.readFile('./404.jpeg', function(err, data) {
				response.setHeader("Content-Type", "image/jpeg");
				response.statusCode = 404;
				response.write(data);
				response.end();
			});
	}
});

server.listen(8080);