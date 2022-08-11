function convert124(str) {
  let conv = str.split('');
  
  // 바로 앞자리 수에서 1을 빼서 자신한테 3을 더함(뺄셈할 때 앞자리 수 넘겨받듯이)
  for (let i = 1; i < conv.length; i++) {
    if (Number(conv[i]) >= 2) continue;
    conv[i - 1] = Number(conv[i - 1]) - 1;
    conv[i] = Number(conv[i]) + 3;
  }
  
  return conv.reduce((a, c, i) => {
    // 맨 첫자리가 0이면 삭제
    if (i < 1 && c < 1) return a;
    // 3이면 세번째 숫자인 4로 변환
    if (c === 3) return `${a}4`;
    return `${a}${c}`;
  }, '');
}

function solution(n) {
  /* 
  1. '20'이거나 2와 0 사이에 2가 없어야 함
  2. 1로 시작하면서 0으로 끝나고 그 사이에 2가 없어야 함
  */
  return n.toString(3).replace(/2[01]{1,}0|20|1[01]{0,}0/g, (m) => convert124(m));
}


const n = 52
console.log(solution(n))

/* 
3진법으로 변환 후 맨 앞자리부터 1을 빼서 
뒷자리로 3을 넘김
(1) 넘겼을 때 4가 넘으면(1, 2이면) 넘기지 않고 
다음 자릿수로 바로 넘어가서 동일한 작업 반복
(2) 4이하면 3을 넘기고 다음 자릿수로 넘어가서 동일한 작업 반복
*/

/* 
1. 첫째자리는 숫자를 더이상 넘길 수 없기 때문에 넘겼을 때 4 이상이 되면 안 됨(ex. xx...1(3)인 숫자)
2. 둘째자리 이상은 숫자를 넘길 수 있기 때문에 5이상만 아니면 됨
3. 작업을 반복했을 때, 첫째자리 수가 4이상이 되면 전부 초기화해야 함
5. 3진법으로 첫째자리가 1이고,  211...101...1(3)인 숫자
*/

/* 
A. 2부터 0까지만 유효하게 바꿀 수 있음

B. 1부터 0은 마지막 글자가 1만 아니면 전부 변환 가능
- 251 = '10010'1(3) = 22441
*/

/* 프로그래머스 모범 답안 */
function change124(n) { 
  let answer = ""; 
  const array1_2_4 = new Array(4, 1, 2); // 3%3 = 0, 1%3 = 1, 2%3 = 2 
  
  while(n) { 
    answer = array1_2_4[n % 3] + answer; 
    n = Math.floor((n - 1) / 3); 
  } 
  
  return answer; 
}