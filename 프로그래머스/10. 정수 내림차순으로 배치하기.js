function countingSort(arr) {
  const freq = new Array(11).fill(0);
  const sorted = [];
  let j = 9;
  
  for (let i = 0; i < arr.length; i++) {
    freq[arr[i]] += 1;
  }
  
  while (j >= 0) {
    if (freq[j]) {
      sorted.push(j);
      freq[j]--;
      continue;
    }
    j--;
  }
  
  return sorted;
}

function solution(n) {
  const arr = n.toString().split('');
  const sorted = countingSort(arr);
  
  return Number(sorted.reduce((a, c) => a += c, ''))
}

const n = 30549194;
console.log(solution(n))