var http = require('http');
var cal = require('./cal');

	var n1 = process.argv[2];
	var n2 = process.argv[3];
	cal.add(n1,n2,function(total){
		console.log("Total:" + total);
	});
	
