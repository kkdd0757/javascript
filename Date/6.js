const logdiffDays = function (date1, date2) {
  const milSec1 = date1.getTime();
  const milSec2 = date2.getTime();
  let difDays = 0;
  if (milSec1 > milSec2) difDays = milSec1 - milSec2;
  else difDays = milSec2 - milSec1;
  return difDays / 1000 / 60 / 60 / 24;
};
console.log(logdiffDays(new Date('2021/01/01'), new Date('2021/12/31')));
