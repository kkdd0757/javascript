const getFirstDateOfMonth = function (year, month) {
  const date = new Date(year, month, 1);
  return date.getDay();
};
console.log(getFirstDateOfMonth(2021, 0));
console.log(getFirstDateOfMonth(2021, 11));
