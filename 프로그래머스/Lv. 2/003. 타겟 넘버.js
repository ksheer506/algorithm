function solution(numbers, target) {
  let count = 0;
  
  const dfs = (sum, i) => {
    if (i === numbers.length) {
      return sum === target ? ++count : count;
    }
    
    dfs(sum + numbers[i], i + 1);
    dfs(sum - numbers[i], i + 1);
  }
  dfs(0, 0);
  
  return count
}

const numbers = [1, 1, 1, 1, 1];
const target = 3;

console.log(solution(numbers, target))
