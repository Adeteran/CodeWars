function order(words){
	w = words.split(" ");
	ordered = [];
	res = "";

	for(let i = 0; i < w.length; i++){
		for(let j = 0; j < w[i].length; j++){
			s = parseInt(w[i][j]);
			if(!isNaN(s)){
				ordered[s-1] = w[i];
			}
		}
	}

	for(let i = 0; i < ordered.length; i++){
		if(i < words.length - 1){
			res += ordered[i] + " ";	
		}else{
			res += ordered[i];
		}
		// res += words[i] + " ";
	}
	console.log(res);
}

order("is2 Thi1s T4est 3a");
order("4of Fo1r pe6ople g3ood th5e the2");
order("");