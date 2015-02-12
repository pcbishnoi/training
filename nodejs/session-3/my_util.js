var fs = require('fs')
function read_file_using_module(dir_path, callback){
	fs.readdir(dir_path,function(err,data){
		if(err)
			return callback(err);
		callback(null,data)
	})
}
exports.read_file_using_module = read_file_using_module;