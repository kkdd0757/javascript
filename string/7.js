const compress = s => console.log(s.replace(/(.)\1+/g, match => match[0] + match.length)); // 동일한 문자가 연속되면

compress('ABBCCCE'); // => AB2C3E
