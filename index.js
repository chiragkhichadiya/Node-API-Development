var http = require('http');
var apis = require('./apis');

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    apis.exec(req, res);
//    res.end(data);
}).listen(8080);