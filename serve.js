
var PUBLIC_DIR_NAME = 'public';

var file = new (require('node-static').Server)("./"+PUBLIC_DIR_NAME);

require('http').createServer(function (request, response) {
  request.addListener('end', function () { 
    file.serve(request, response);
  });
}).listen(8090);