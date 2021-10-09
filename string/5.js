const count = (str, char) => console.log(str.match(new RegExp(char, 'g')).length);
count('COMPUTERPROGRAMMING', 'R'); // => 3
