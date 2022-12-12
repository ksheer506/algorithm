function solution(s) {
  const letterMap = new Map();
  let first = '';
  let answer = 0;
   
  const reset = () => {
    answer += 1;
    letterMap.clear();
  }
  
  for (let i = 0; i < s.length; i++) {
    if (!letterMap.size) {
      first = s[i];
      letterMap.set(first, 0);
    }
    
    const firstPrev = letterMap.get(first);
    const restPrev = letterMap.get('REST') || 0;
    
    if (s[i] === first) {
      letterMap.set(first, firstPrev + 1);
      
      if (i === s.length - 1) {
        reset();
      }
    } else {
      letterMap.set('REST', restPrev + 1);
      
      if (restPrev + 1 === firstPrev || i === s.length - 1) {
        reset();
      }
    }
  }
  
  return answer;
}

const s = 'abracadabra'
console.log(solution(s));