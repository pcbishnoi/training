function add_me_up(n1,n2,call_back){
	var result = Number(n1)+Number(n2);
	call_back(result);
}
exports.my_fun = add_me_up;