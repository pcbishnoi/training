var fs = require('fs');
var http = require('http')
//var filePath = path.join(__dirname, 'start.html');
http.createServer(function(request,response){
	var filePath = '/etc/passwd';
	fs.readFile(filePath,{encoding: 'utf-8'},function(err,data){
		if (!err){
    console.log('received data: ' + data);
    response.writeHead(200, {'Content-Type': 'text/html'});
    response.write(data);
    response.end();
    }else{
        console.log(err);
    }
	})
}).listen(3001);
