function solution(phone_book) {
  const L = phone_book.length
  const phones = new Set(phone_book)
  
  for (let i = 0; i < L; i++) {
    const phone = phone_book[i]
    
    for (let j = 0; j < phone.length - 1; j++) {
      if (phones.has(phone.substring(0, j + 1))) {
        return false
      }
    }
  }
  return true;
}
/*
- N번째 번호가 첫번째 번호의 접두사가 되는 경우 실패함
*/

/** 정렬을 이용한 방법 */
function solution2(phone_book) {
  const sorted = phone_book.sort()

  for (let i = 1; i < sorted.length; i++) {
    const prev = sorted.at(i - 1)
    const current = sorted.at(i)
    
    if (current.includes(prev)) {
      return false
    }
  }
  return true
}

const phones = ["0", "119", "97674223", "195524421", "1110", "1199", "01"]

console.log(solution2(phones))