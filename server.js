var WebSocketServer = require('websocket').server;
var http = require('http');

var server = http.createServer(function(request, response) {
});
server.listen(1337, function() { });

/**/
wsServer = new WebSocketServer({
    httpServer: server
});

// Variable to store all connected players
var clients = [];

wsServer.on('request', function(request) {
	console.log("Someone Connected!");
    var connection = request.accept(null, request.origin);
	var index = clients.push(connection) - 1;
    // Broadcast any new message received 
    connection.on('message', function(message) {
        if (message.type === 'utf8') {
            for (var i=0; i < clients.length; i++) {
                if (i != index) {
                	clients[i].sendUTF(message.utf8Data);
                }
            }
        }
    });

    connection.on('close', function(connection) {
        clients.splice(index, 1);
    });
});