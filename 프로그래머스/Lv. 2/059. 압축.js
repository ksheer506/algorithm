const dictionary = {
  A: 1, B: 2, C: 3, D: 4, E: 5, F: 6, G: 7, H: 8, 
  I: 9, J: 10, K: 11, L: 12, M: 13, N: 14, O: 15,
  P: 16, Q: 17, R: 18, S: 19, T: 20, U: 21, V: 22,
  W: 23, X: 24, Y: 25, Z: 26,
}

function solution(msg) {
  const L = msg.length
  const answer = []
  let lastIndex = 27
  let start = 0
  let end = 1

  while (start < L) {
    let current = msg.slice(start, end)
    let index = 0 // 사전 인덱스
  
    while (dictionary[current] && end <= L) {
      index = dictionary[current]
      end += 1
      current = msg.slice(start, end)
    }
    if (index > 0) {
      answer.push(index)
    }
    start = end - 1
    // 사전에 없던 항목 추가
    dictionary[current] = lastIndex
    lastIndex += 1
  }
  return answer;
}

/**
 * [LZW 압축]
 * 1. 길이가 1인 모든 단어를 포함하도록 사전을 초기화한다.
 * 2. 사전에서 현재 입력과 일치하는 가장 긴 문자열 w를 찾는다
 * 3. w에 해당하는 사전의 색인 번호를 출력하고, 입력에서 w를 제거한다.
 * 4. 입력에서 처리되지 않은 다음 글자가 남아있다면(c), w+c에 해당하는 단어를 사전에 등록한다.
 * 5. 단계 2로 돌아간다.
 */

const msg1 = "KAKAO" // [11, 1, 27, 15]
const msg2 = "TOBEORNOTTOBEORTOBEORNOT" // [20, 15, 2, 5, 15, 18, 14, 15, 20, 27, 29, 31, 36, 30, 32, 34]
const msg3 = "ABABABABABABABAB" // [1, 2, 27, 29, 28, 31, 30]

console.log(solution(msg2))
console.log([20, 15, 2, 5, 15, 18, 14, 15, 20, 27, 29, 31, 36, 30, 32, 34])