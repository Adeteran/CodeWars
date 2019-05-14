/*
Given an array, find the int that appears an odd number of times.
There will always be only one integer that appears an odd number of times.
*/

function findOdd(A) {
	const len = A.length;	
	const nums = {};
	let result = 0;
	for(let i = 0; i < len; i++){
		nums[A[i]] = 0;
	}
	for(let i = 0; i < len; i++){
		nums[A[i]]++;
	}		

	Object.keys(nums).forEach((key,index) => {
		if(nums[key] % 2 != 0){
			result = parseInt(key);
		}		
	})
  return result;
}

let a = [20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5];
let b = [1,1,2,-2,5,2,4,4,-1,-2,5];
let c = [20,1,1,2,2,3,3,5,5,4,20,4,5];

console.log(findOdd(a));
console.log(findOdd(b));
console.log(findOdd(c));