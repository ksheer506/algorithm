function solution(friends, gifts) {
  const giftMap = new Map()
  const indexMap = new Map()
  
  for (let i = 0; i < gifts.length; i++) {
    const [A, B] = gifts[i].split(' ')
    const prevCount = giftMap.get(A)?.[B] ?? 0
    const prevAIndex = indexMap.get(A) ?? 0
   const prevBIndex = indexMap.get(B) ?? 0
    
    giftMap.set(A, { ...giftMap.get(A), [B]: prevCount + 1 })
    indexMap.set(A, prevAIndex + 1)
    indexMap.set(B, prevBIndex - 1)
  }
  
  let max = 0
  
  for (let i = 0; i < friends.length; i++) {
    let giftsNextYear = 0
    const A = friends[i]
      
    for (let j = 0; j < friends.length; j++) {
      if (i === j) {
        continue
      }
      const B = friends[j]
      const AtoBCount = giftMap.get(A)?.[B] ?? 0
      const BtoACount = giftMap.get(B)?.[A] ?? 0
      const AIndex = indexMap.get(A) ?? 0
      const BIndex = indexMap.get(B) ?? 0
      
      if (AtoBCount > BtoACount) {
        giftsNextYear += 1
      } else if (AtoBCount === BtoACount) {
        giftsNextYear += +(AIndex > BIndex)
      }
    }
    max = Math.max(max, giftsNextYear)
  }
  return max
}

const friends = ["a", "b", "c"]
const gifts = ["a b", "b a", "c a", "a c", "a c", "c a"]

/*
1. 준 사람 -> { 받은 사람1: 개수, 받은 사람2: 개수 } 맵(giftMap) 생성
2. from, to로 부터 각 사람들의 선물 지수 맵(giftIndexMap) 생성
*/
console.log(solution(friends, gifts))