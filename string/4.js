const countUpperCase = str => console.log(str.match(/([^a-z])/g).length);
countUpperCase('KoreaTimeGood'); // 3
