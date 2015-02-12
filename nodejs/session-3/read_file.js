var my_util = require('./my_util.js')
my_util.read_file_using_module('/etc/passwd/',function(err,data){
	if(err)
		return console.error('Error occured', err);
	console.log('data is: '+data);
})