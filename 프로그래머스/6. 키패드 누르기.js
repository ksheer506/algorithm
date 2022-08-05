//   1 2 0 %3
//   0 1 2 c
// 0 1 2 3
// 1 4 5 6
// 2 7 8 9
// 3   0
// r [r, c]
function solution(numbers, hand) {
  let answer = '';
  let left = [3, 0]; // 왼손 초기 위치
  let right = [3, 2];  // 오른손 초기 위치

  for (let i = 0; i < numbers.length; i++) {
    const key = numbers[i] || 11;
    const c = ((key % 3) + 2) % 3; 
    const r = Math.floor((key - 1) / 3);
    const target = [r, c]

    if (c === 2) {
      answer += 'R'
      right = [r, 2];
    } else if (c === 0) {
      answer += 'L'
      left = [r, 0];
    } else {
      const s1 = Math.abs(left[0]-target[0]) + Math.abs(left[1]-target[1])
      const s2 = Math.abs(right[0]-target[0]) + Math.abs(right[1]-target[1])
      
      if (s1 > s2) {
        answer += 'R'
        right = target;
      } else if (s1 < s2) {
        answer += 'L'
        left = target;
      } else {
        answer += hand === 'left' ? 'L' : 'R'
        if (hand === 'left') {
          left = target;
        } else {
          right = target;
        }
      }
    }
  }
  return answer;
}

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
const hand = "right"

console.log(solution(nums, hand))
console.log('LLRLLRLLRL')
