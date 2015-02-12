console.log(process.argv[1]);
var total = 0;
for(var i = 2;i<process.argv.length;i++){
	console.log(process.argv[i])
	total+=Number(process.argv[i])
	//if (Number(process.argv[i]) == NaN){
		//console.log('you are suppling non numeric value!')
	//}
	//console.log(typeof Number(process.argv[i]));
}
console.log("Total is "+total);