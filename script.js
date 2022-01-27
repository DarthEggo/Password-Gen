
var passLength = window.prompt("How long will your password be?");

var ifSpecial = window.prompt("Special Characters? Answer Yes or No");

if(ifSpecial === "Yes" || "yes") {
  ifSpecial = true;
}

else if(ifSpecial === "No" || "no") {
  ifSpecial = false;
}

console.log(ifSpecial);

const letters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

const numbers = [1,2,3,4,5,6,7,8,9,0];

const special = ["-","/","!","@","?","%", "#", "$","&"];

var pass = [];

function getRandomInt(max)
{
  return Math.floor(Math.random()*max);
}



console.log(passLength);

for(let i = 0; i < passLength; i++) {
  let j = getRandomInt(3);
  if(j == 1) {
    let l = getRandomInt(25);
    pass.push(letters[l]);
  }
  else if(j == 2 && ifSpecial) {
    let s = getRandomInt(10);
    pass.push(special[s]);
  }
  else {
    let num = getRandomInt(10);
    pass.push(numbers[num]);
  }
}
console.log(pass);

let finalPass = pass.join('');

console.log(finalPass);

document.getElementById("passwordDisplay").innerHTML = finalPass;

