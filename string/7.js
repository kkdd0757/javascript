const compress = s => console.log(s.replace(/(.)\1+/g, match => match[0] + match.length));

compress('ABBCCCE'); // => AB2C3E
