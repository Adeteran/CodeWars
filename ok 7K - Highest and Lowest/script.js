function highAndLow(numbers){
	let max = 0;
	let min = 0;
	let res = numbers.split(" ");
	let resStr = "";
	for(let i = 0; i < res.length; i++){
		res[i] = parseInt(res[i]);
	}
	sortInts(res);	
	resStr += res[res.length - 1] + " " + res[0];
	return resStr;
}

function sortInts(a){
	let prim = 1;
	while(prim < a.length){
		if(a[prim - 1] <= a[prim]){
			prim++;
		}else{
			let temp = a[prim - 1];
			a[prim - 1] = a[prim];
			a[prim] = temp;
			prim--;			
			if(prim === 0){
				prim = 1;
			}
		}
	}
}

console.log(highAndLow("4 5 29 54 4 0 -214 542 -64 1 -3 6 -6"));