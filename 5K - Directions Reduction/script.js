function dirReduc(arr){

	let pos = [0,0];
	let recorr = [];

	for(let i = 0; i < arr.length; i++){
		if(arr[i] === "NORTH"){
			pos[1]++;			
		}
		if(arr[i] === "SOUTH"){
			pos[1]--;
		}
		if(arr[i] === "EAST"){
			pos[0]++;			
		}
		if(arr[i] === "WEST"){
			pos[0]--;			
		}		

		// switch(arr[i]) {
		// 	case "NORTH":
		// 		pos[1]++;			
		// 	  	break;
		// 	case "SOUTH":
		// 		pos[1]--;
		// 		break;
		// 	case "EAST":
		// 		pos[0]++;
		// 		break;
		// 	case "WEST":
		// 		pos[0]--;
		// 		break;
		// }
		console.log(pos);
		recorr.push(pos);
	}

	console.log(recorr);
}

dirReduc(["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"]);
// dirReduc(["NORTH", "WEST", "SOUTH", "EAST"]);
// dirReduc(["NORTH", "SOUTH", "EAST", "WEST", "EAST", "WEST"]);
// dirReduc(["NORTH", "EAST", "SOUTH", "SOUTH", "EAST", "WEST", "WEST"]);