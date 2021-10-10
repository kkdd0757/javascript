const isPalindrome = str => {
  const sentence = str
    .replace(/\s/gi, '')
    .replace(/,/gi, '')
    .replace(/:/gi, '')
    .toLowerCase();
  console.log(sentence === [...sentence].reverse().join(''));
};
isPalindrome('A man, a plan, a canal: Panama'); // => true
isPalindrome('race a car'); // => false
