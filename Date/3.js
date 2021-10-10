const getLastDateOfMonth = function (year, month) {
  const today = new Date(year, month + 1, 1);
  const lastDate = today.toISOString().slice(8, 10);
  return lastDate;
};
console.log(getLastDateOfMonth(2021, 0)); // 31
console.log(getLastDateOfMonth(2021, 1)); // 28
