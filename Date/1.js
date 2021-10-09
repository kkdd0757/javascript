const formatDate = date => `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
console.log(formatDate(new Date('2021/07/24'))); // => "2021-07-24"
console.log(formatDate(new Date('1900/1/4'))); // => "1900-01-04"
