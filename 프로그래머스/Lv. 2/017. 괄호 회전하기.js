function solution(s) {
  const rotated = `${s}${s}`;
  const L = s.length;
  const brackets = ['[', '{', '(', ']', '}', ')'];
  let isMatched = false;
  let counts = 0;
  
  for (let i = 0; i < L; i++) {
    const stack = [];
    
    for (let j = i; j < L + i - 1; j++){
      const idx = brackets.findIndex((e) => e === rotated[j]);
      
      if (idx > -1 && idx < 3) {
        stack.push(brackets[idx + 3]);
        continue;
      }
      
      if (rotated[j] === stack.pop()) {
        isMatched = true;
      } else {
        isMatched = false;
        break;
      }
    }
    
    if (isMatched) {
      counts++;
    }
  }
  
  return counts;
}

const s = "[)(]";
console.log(solution(s));

/* 
s를 2번 이어 붙여서 0 ≤ i < s.length에서
i부터 s.length - 1 + i 인덱스까지 검사
*/
