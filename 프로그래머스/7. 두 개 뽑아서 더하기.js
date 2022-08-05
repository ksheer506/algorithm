function countingSort(arr) {
  const freq = new Array(arr.length + 1);
  
  while (0) {
    
  }
  
  return sorted;
}

function solution(numbers) {
    const sorted = numbers.sort((a, b) =>  a - b)
    const answer = new Set();
    
    for (let i = 0; i < numbers.length; i++) {
      for (let j = i + 1; j < numbers.length; j++) {
        console.log(i, j)
        const sum = numbers[i] + numbers[j];
        if (!answer.has(sum)) {
          answer.add(sum);
        }
      }
    }
    
    return Array.from(answer);
}

const numbers = [5,0,2,7];
console.log(solution(numbers))
// [0, 2, 5, 7]
// [0, 2, 5, 7]
// 2 5 7 7 9 12
// i = 0 루프, j = i 루프
