function solution(s) {
  const stack = [];

  // 길이가 홀수면 짝지을 수가 없으므로 바로 종료
  if (s.length % 2) return 0;
  for (let i = 0; i < s.length; i++) {
    const L = stack.length - 1;
    
    // stack의 마지막 요소가 현재 문자와 다르면 push, 같으면 pop
    if (s[i] !== stack[L]) {
      stack.push(s[i]);
    } else {
      stack.pop();
    }
  }
  return stack.length < 1 ? 1 : 0;
}

/* 통과는 되지만 시간 초과(정규식은 최선의 선택이 아님) */
function solution2(s) {
  const match = 'abcdefghijklmnopqrstuvwxyz'.replace(/\w(?=\w|$)/g, '$&{2}|').slice(0, -1)
  const reg = new RegExp(match, 'g');
  let prev = 'a';
  
  while (prev.length > 0 && prev !== s) {
    prev = s;
    s = s.replace(reg, '');
  }
  
  return s.length > 0 ? 0 : 1
}

const s = 'abaaba'
console.log(solution(s))
console.log(solution2(s))

/* 
짝을 이루지만 s[i] !== stack.pop()인 경우?
반례: abaaba
*/
 