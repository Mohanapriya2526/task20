const number =  [21, 58, 69, 20, 47, 55, 7, 36, 91, 75];
number.sort(function(a, b){return b - a});
const largest5 = number.slice(0, 5);
const sum = largest5.reduce((value, num) => value + num, 0);
console.log (number);
console.log ( largest5 );
console.log("The sum of first 5 largest numbers is : " + sum)