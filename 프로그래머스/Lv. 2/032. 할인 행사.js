const DURATION = 10

function solution(want, number, discount) {
  const WANTS = want.length
  let timelyDays = 0
  
  for (let i = 0; i < discount.length - WANTS + 1; i++) {
    /* maxPurchaseCount 구할 때 일반 객체 대신 Map을 사용하면 성능이 더 좋음 */
    const maxPurchaseCount = discount
      .slice(i, DURATION + i)
      .reduce((a, c) => a.set(c, (a.get(c) ?? 0) + 1), new Map())
    let shouldSignUp = false

    for (let j = 0; j < WANTS; j++) {
      const toBuy = want[j]
      const max = maxPurchaseCount.get(toBuy) ?? 0
      
      if (max < number[j]) {
        shouldSignUp = false
        break
      }
      shouldSignUp = true
    }
    timelyDays += +shouldSignUp
  }
  return timelyDays
}

const want = ["banana", "apple", "rice", "pork", "pot"]
const number = [3, 2, 2, 2, 1];
const discount = ["chicken", "apple", "apple", "banana", "rice", "apple", "pork", "banana", "pork", "rice", "pot", "banana", "apple", "banana"];

console.log(solution(want, number, discount))