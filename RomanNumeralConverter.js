function convertToRoman(num) {
  let arr="";
  const chu = {
    "M":1000,
    "CM":900,
    "D":500,
    "CD":400,
    "C":100,
    "XC":90,
    "L":50,
    "XL":40,
    "X":10,
    "IX":9,
    "V":5,
    "IV":4,
    "I":1
  }
  for (let key in chu){
    while(num>=chu[key]){
      arr+=key;
      num-=chu[key]
    }
  }
 return arr;
}

convertToRoman(36);
