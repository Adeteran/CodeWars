let a = 0;
let b = 1;
let c = 123456789;

function descendingOrder(n){
  let temp = n.toString();
  let res = [];
  let strTotal = "";
  let total = 0;
  for(let i = 0; i < temp.length; i++){
    res.push(temp[i]);    
  }
  console.log(res);
  if(res.length < 2){
  	return parseInt(res[0]);
  }
  for(let i = res.length - 1; i >= 0; i--){
    strTotal += res[i];
  }
  return parseInt(strTotal);
}

console.log(descendingOrder(a));
console.log(descendingOrder(b));
console.log(descendingOrder(c));