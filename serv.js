var http = require("http") ;

var server = http.createServer(function(req, res){
  if(req.url == '/'){
    var data = "<h1>abc</h1>";
    res.writeHead(200, {
      'Content-Type': 'text/plain',
      'Content-Length': data.length
    });
    res.end(data, function(){
      console.log("Call /");
    });
  } else if(req.url == '/index'){
    res.writeHead(302, {
      'Location': '/'
    });
    res.end();
  } else {
    var data = "<h1>404 Not found</h1>";
    res.writeHead(404, {
      'Content-Type': 'text/html',
      'Content-Length': data.length
    });
    res.end(data, function(){
      console.log("404 Not found!");
    });
  }
});

server.listen(3000, function(){
  console.log('Node start');
});
