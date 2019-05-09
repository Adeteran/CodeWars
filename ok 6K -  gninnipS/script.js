let a = "Welcome";
let b = "Hey fellow warriors";
let c = "Just kidding there is still one more"

function spinWords(w){
	let words = w.split(" ");
	let frase = "";	
	for(let i = 0; i < words.length; i++){		
		if(words[i].length >= 5){
			let rev = "";
			for(let j = words[i].length - 1; j >= 0; j--){
				rev += words[i][j];
			}
			words[i] = rev;		
		}
		if(i < words.length - 1){
			frase += words[i] + " ";	
		}else{
			frase += words[i];
		}				
	}
	console.log(frase);
}

spinWords(a);