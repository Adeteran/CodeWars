function solution(number){	
	let res = 0;
	for(let i = 1; i < number; i++){  		
	    if(i % 3 == 0){	    	
			res += i;			
	    }
	    if(i % 5 == 0){
	    	res += i;			
	    }
	    if(number % 3 == 0 && number % 5 == 0){
			res -= i;      
	    }
	}
	return res;	
}
solution(10);