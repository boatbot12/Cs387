var http = require("http") ;
var fs = require("fs") ;

var server = http.createServer(function(req, res){
  if(req.url == '/'){
    var data = fs.readFileSync("./game_play/game.html");
    res.writeHead(200, {
      'Content-Type': 'text/html',
      'Content-Length': data.length
    });
    res.end(data);
  } else if(req.url == '/index'){
    res.writeHead(302, {
      'Location': '/'
    });
    res.end();
  } else if(req.url.match(/\/png\//)){
    var data = fs.readFileSync("./game_play"+req.url);
    res.writeHead(200, {
      'Content-Type': 'image/png',
      'Content-Length': data.length
    });
    res.end(data);
  } else if(req.url == '/Hw.css'){
    var data = fs.readFileSync("./game_play/Hw.css");
    res.writeHead(200, {
      'Content-Type': 'text/css',
      'Content-Length': data.length
    });
    res.end(data);
  }else {
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
});
