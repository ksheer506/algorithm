function solution(s) {
  return s.toLowerCase().replace(/(?<=\s|^)\w/g, m => m.toUpperCase());
}

function solution2(s) {
  const lower = s.toLowerCase();
  let answer = '';
  let isFirst = true;
  
  for (let i = 0; i < lower.length; i++) {
    let char = lower[i];
    
    if (lower[i-1] === ' ' && char !== char.toUpperCase()) {
      isFirst = true;
    }
    if (isFirst) {
      char = char.toUpperCase();
    }
    
    answer += char;
    isFirst = false;
  }
  
  return answer
}

const s = "3people unFollowed me";
console.log(solution2(s))
