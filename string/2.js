function solution(new_id) {
  const result = new_id
    .toLowerCase()
    .replace(/[^\w-_.]+/g, '')
    .replace(/\.{2,}/g, '.')
    .replace(/^\.|\.$/g, '')
    .replace(/^$/g, 'a')
    .slice(0, 15)
    .replace(/^\.|\.$/g, '');
  return result + result.slice(-1).repeat(Math.max(0, 3 - result.length));
}

console.log(solution('...!@BaT#*..y.abcdefghijklm')); // bat.y.abcdefghi
console.log(solution('z-+.^.')); // z--
console.log(solution('abcdefghijklmn.p')); // abcdefghijklmn
