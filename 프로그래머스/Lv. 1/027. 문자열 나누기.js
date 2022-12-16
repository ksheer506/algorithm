function solution(s) {
  const letterMap = new Map();
  let head = '';
  let answer = 0;
   
  const reset = () => {
    head = '';
    letterMap.clear();
  }
  
  for (let i = 0; i < s.length; i++) {
    if (!letterMap.size) {
      head = s[i];
      letterMap.set(head, 0);
    }
    
    const headPrev = letterMap.get(first);
    
    if (s[i] === head) {
      letterMap.set(head, headPrev + 1);
    } else {
      const restPrev = letterMap.get('REST') || 0;
      
      letterMap.set('REST', restPrev + 1);
      
      if (restPrev + 1 === headPrev) {
        answer += 1;
        reset();
      }
    }
    if (i === s.length - 1) {
      answer += 1;
      reset();
    }
  }
  
  return answer;
}

const s = 'abracadabra'
console.log(solution(s));