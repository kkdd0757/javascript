const countUpperCase = str => str.match(/([^a-z])/g).length;
console.log(countUpperCase('KoreaTimeGood')); // 3
