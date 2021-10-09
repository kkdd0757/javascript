const isEqualDate = function (dateCheck1, dateCheck2) {
  let answer = false;
  const year1 = dateCheck1.getFullYear();
  const year2 = dateCheck2.getFullYear();
  const month1 = dateCheck1.getMonth();
  const month2 = dateCheck2.getMonth();
  const date1 = dateCheck1.getDate();
  const date2 = dateCheck2.getDate();
  if (year1 === year2 && month1 === month2 && date1 === date2) answer = true;
  return answer;
};
console.log(isEqualDate(new Date('2021/07/24'), new Date('2021/07/24'))); // => true
console.log(isEqualDate(new Date('2021/07/24'), new Date('2022/07/2'))); // => false
