function solution(a, b, n) {
  let coke = 0;
  
  while (n >= a) {
    const bottles = Math.floor(n / a) * a;
    const newCoke = bottles / a * b;
    
    coke += newCoke;
    n -= bottles - newCoke;
  }
  
  return coke;
}

const a = 2
const b = 1
const n = 20
console.log(solution(a, b, n));