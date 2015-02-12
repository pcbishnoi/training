var my_utils = require('./my_utils');

var n1 = process.argv[2];
var n2 = process.argv[3];

my_utils.my_fun(n1,n2,function(result){
	console.log(result);
})

