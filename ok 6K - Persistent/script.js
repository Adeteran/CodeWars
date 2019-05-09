/*
Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, 
which is the number of times you must multiply the digits in num until you reach a single digit.
*/

function persistence(num) {
	let counter = 0;
	rec(num);
	function rec(num){		
		let res = 1;
		let digit = num.toString();
		if(digit.length == 1){
			return num;
		}else{
			for(let i = 0; i < digit.length; i++){
				res *= parseInt(digit[i]);
			}			
			rec(res);
			counter++;
		}
	}
	console.log(counter);
}

console.log(persistence(39));
console.log(persistence(4));
console.log(persistence(25));
console.log(persistence(999));