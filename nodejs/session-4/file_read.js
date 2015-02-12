var http = require('http');
var fs = require('fs');
http.createServer(function(req,res){
	var filePath = '/etc/passwd';
	//{encoding: 'utf-8'}
	fs.readFile(filePath,{encoding: 'utf-8'},function(err,data){
		if(!err){
			res.write(data);
			res.end();
			console.log(data);
		}else{
			console.log('found error!');
			res.end();
		}
	})
}).listen(3001);