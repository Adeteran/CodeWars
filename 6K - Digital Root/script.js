function digital_root(n) {
	let num = n.toString();
	if(num.length > 1){
		let res = 0;
		for(let i = 0; i < num.length; i++){			
			res += parseInt(num[i]);			
		}		
		digital_root(res);		
	}else{
		return n;		
	}
}

// console.log(digital_root(5));
// console.log(digital_root(16));
// console.log(digital_root(456));
console.log(digital_root(4897654));

