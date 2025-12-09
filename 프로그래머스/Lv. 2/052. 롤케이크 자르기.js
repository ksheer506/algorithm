function solution(topping) {
  let equal = 0
  // type -> 개수
  const restCount = new Map()
  const myCount = new Map()
  
  // 1. 전체 토핑 타입별 개수 정보 수집
  for (let i = 0; i < topping.length; i++) {
    const type = topping[i]
    const prev = restCount.get(type) ?? 0
    
    restCount.set(type, prev + 1)
  }
  // 2. 내 토핑 정보, 잔여 토핑 정보 수집
  for (let j = 0; j < topping.length; j++) {
    const type = topping[j]
    const myPrev = myCount.get(type) ?? 0
    const prevRest = restCount.get(type) ?? 0
    
    myCount.set(type, myPrev + 1)
    if (prevRest > 1) {
      restCount.set(type, prevRest - 1)
    } else {
      restCount.delete(type)
    }
    
    if (myCount.size === restCount.size) {
      equal += 1
    }
  }
  return equal
}

const topping = [1, 2, 1, 3, 1, 4, 1, 2]

console.log(solution(topping))