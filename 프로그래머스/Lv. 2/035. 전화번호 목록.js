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

const phones = ["119", "97674223", "1195524421", "11910", "1193"]

console.log(solution(phones))