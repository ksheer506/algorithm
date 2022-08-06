//   1 2 0 %3
//   0 1 2 c
// 0 1 2 3
// 1 4 5 6
// 2 7 8 9
// 3   0
// r [r, c]

const calcDistance = ([s, e], [ts, te]) => {
  return Math.abs(s - ts) + Math.abs(e - te);
}
function solution(numbers, hand) {
  let answer = '';
  let left = [3, 0]; // 왼손 초기 위치
  let right = [3, 2];  // 오른손 초기 위치

  for (let i = 0; i < numbers.length; i++) {
    const key = numbers[i] || 11;
    const c = ((key % 3) + 2) % 3; // 첫번째 열을 0으로 변환
    const r = Math.floor((key - 1) / 3);
    const target = [r, c]

    if (c === 2) {
      answer += 'R'
      right = [r, 2];
      continue;
    } 
    if (c === 0) {
      answer += 'L'
      left = [r, 0];
      continue;
    }
    const s1 = calcDistance(left, target);
    const s2 = calcDistance(right, target);
      
    if (s1 > s2 || (s1 === s2 && hand === 'right')) {
      answer += 'R'
      right = target;
    }
    if (s1 < s2 || (s1 === s2 && hand === 'left')) {
      answer += 'L'
      left = target;
    }
  }
  return answer;
}

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
const hand = "right"

console.log(solution(nums, hand))
console.log('LLRLLRLLRL')
