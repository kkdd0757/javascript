const toggleCase = str =>
  console.log(str.replace(/./g, s => (s === s.toUpperCase() ? s.toLowerCase() : s.toUpperCase())));

toggleCase('StuDY');
