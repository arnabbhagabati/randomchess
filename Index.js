var http = require('http');

// creates a new httpServer instance
http.createServer(function (req, res) {
  // this is the callback, or request handler for the httpServer
//	window.open("http://www.w3schools.com");
  // respond to the browser, write some headers so the 
  // browser knows what type of content we are sending
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write('<title>index</title>');	
  // write some content to the browser that your user will see
  res.write('<body>');
  res.write('<button onclick="myFunction()">Try it</button>');
  res.write('<script>');
  res.write('function myFunction(){window.open("mini_chess.html","_self");}');
  res.write('</script>');
  res.write('<body>');
  res.write('</body>');

  // close the response
  res.end();
}).listen(8080); 