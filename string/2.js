function solution(newId) {
  return newId
    .toLowerCase() // 1단계
    .replace(/[^\w-.]/g, '') // 2단계 ; \w -> (알파벳 + 숫자 + _)
    .replace(/\.{2,}/g, '.') // 3단계
    .replace(/^\.|\.$/g, '') // 4단계
    .replace(/^$/g, 'a') // 5단계
    .slice(0, 15) // 6단계(1)
    .replace(/^\.|\.$/g, '') // 6단계(2)
    .replace(
      /^.{1,2}$/g,
      match => match + match[match.length - 1].repeat(3 - match.length) // 7단계
    );
}

console.log(solution('...!@BaT#*..y.abcdefghijklm')); // bat.y.abcdefghi
console.log(solution('z-+.^.')); // z--
console.log(solution('abcdefghijklmn.p')); // abcdefghijklmn
