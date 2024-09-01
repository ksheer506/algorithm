function solution(n, a, b) {
  let [nextA, nextB] = [Math.min(a, b), Math.max(a, b)]
  let distance = nextB - nextA
  let matches = 0
  
  while (!(distance === 1 && nextB % 2 === 0)) {
    if (nextA % 2) {
      nextA = (nextA + 1) / 2
    } else {
      nextA = nextA / 2
    }
    if (nextB % 2) {
      nextB = (nextB + 1) / 2
    } else {
      nextB = nextB / 2
    }
    distance = nextB - nextA
    matches += 1
  }
  return matches + 1;
}

const N = 8
const A = 4
const B = 7

console.log(solution(N, A, B))

/*
  1        2
 1   2   3   4
1 2 3 4 5 6 7 8
2^n - 1 ≤ A ≤ 2^n이 현재 라운드의 상대 

1. 2로 나눠서 나머지가 0이면 몫을 사용, 1이면 1을 더해서 몫을 사용. 그 몫이 다음 라운드의 번호
2. [nextA, nextB]에서 nextB가 2의 배수일 때까지 반복
3. dist === 1 이고 nextB % 2 === 0이 될 때까지

4/2 = 2
(5+1)/2 = 3

*/

/* 모범 답안 */
function solution(n,a,b) { 
  let answer = 0; 
  
  while(a !== b) { 
    a = Math.ceil(a/2); 
    b = Math.ceil(b/2); 
    answer++; 
  } 
  return answer; 
}