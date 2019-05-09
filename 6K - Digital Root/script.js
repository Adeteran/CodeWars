// function digital_root(n) {
// 	let res = n.toString();
// 	let result = 0;
// 	console.log("Length: " + res.length);
// 	if(res.length > 1){
// 		for(let i = 0; i < res.length; i++){
// 			result += parseInt(res[i],10);			
// 		}
// 		console.log("result: " + result);
// 		if(result.toString().length === 1){
// 			console.log("final: " + result);
// 			return result;
// 		}else{
// 			digital_root(result);
// 		}
// 	}	
// }

function digital_root(n) {
	let num = n.toString();
	if(num.length > 1){
		let res = 0;
		for(let i = 0; i < num.length; i++){
			// console.log(num[i]);
			res += parseInt(num[i]);			
		}
		// console.log(res);
		digital_root(res);		
	}else{
		console.log(n);
		// return n;
	}
}

digital_root(5);
digital_root(16);
digital_root(456);
digital_root(4897654);

