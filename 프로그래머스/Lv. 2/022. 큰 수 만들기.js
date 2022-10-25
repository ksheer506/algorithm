function solution(number, k) {
  let front = 0;
  let i = 0;
  let result = '';
  let max = Math.max(...number.slice(0, k + 1));
  const t0 = performance.now()
  while (k > 0) {
    const t1 = performance.now()
    if (t1 - t0 > 1000) break;
    
    if (k >= number.length - front) {
      result += '*'.repeat(k);
      break;
    }
    if (number[i] !== `${max}`) {
      result += '*';
      i++;
      continue;
    }
    
    result += `${max}`;
    k -= i - front;
    front = i + 1;
    i++;
    console.log(result, front, k, max);
    max = Math.max(...number.slice(front, front + k + 1));
  }
  result += number.slice(result.length);
  
  return result.replace(/\*/g, '');
}

const number = '1119'
const k = 3
console.log(solution(number, k));
console.log(Math.max(...'1'));

/* 
ex. 4177256841
각각5722643156 번째로 큰 수

**77256841

0. front = 0
1. front ~ k까지 가장 큰 숫자의 인덱스 N을 확인
2-1. N === k이면, number.slice(k) 반환
2-2. N < k이면, number = number.slice(N),
front = N + 1, k = k - N으로 1 작업 반복
3. k <= 0이 되면 number 반환

*/
