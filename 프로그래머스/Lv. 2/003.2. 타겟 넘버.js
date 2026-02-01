function solution(numbers, target) {
  const L = numbers.length
  let count = 0
  
  const dfs = (current, cursor) => {
    if (cursor === L && current === target) {
      count += 1
      return
    }
    if (cursor >= L) {
      return
    }
    
    dfs(current + numbers[cursor], cursor + 1)
    dfs(current - numbers[cursor], cursor + 1)
  }
  dfs(0, 0)
  
  return count
}

const numbers = [1, 1, 1, 1, 1]
const target = 3 // 5

console.log(solution(numbers, target))