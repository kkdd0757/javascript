const getLastDayOfMonth = function (year, month) {
  const firstDay = new Date(year, month + 1, 1);
  const lastDay = firstDay.toISOString().slice(8, 10);
  return new Date(year, month, lastDay).getDay();
};
console.log(getLastDayOfMonth(2021, 0));
console.log(getLastDayOfMonth(2021, 11));
