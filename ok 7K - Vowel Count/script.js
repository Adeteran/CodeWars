let a = "abracadabra";

function getCount(str) {
  var vowelsCount = 0;
  let vowels = ["a","e","i","o","u"];
  for(let i = 0; i < str.length; i++){      
      for(let j = 0; j < vowels.length; j++){
          if(str.charAt(i) == vowels[j]){
              vowelsCount++;
          }
      }
  }
  return vowelsCount;
}

console.log(getCount(a));