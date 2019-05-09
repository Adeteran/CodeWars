function findShort(s){
	let words = s.split(" ");
	let res = words[0].length;
	for(let i = 0; i < words.length; i++){
		if(words[i].length < res){
			res = words[i].length;
		}
	}
	console.log(res);
}

findShort("bitcoin take over the world maybe who knows perhaps");
findShort("turns out random test cases are easier than writing out basic ones");