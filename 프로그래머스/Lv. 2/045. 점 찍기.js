function solution(k, d) {
  const max = Math.floor(d / k)
  let count = 0
  
  for (let a = 0; a <= max; a++) { // x축
    const maxY = Math.floor(Math.sqrt(d ** 2 - (a * k) ** 2) / k)
    
    count += maxY + 1
  }
  return count
}

 
 /**
 * 실패: 시간 초과
 * 한 축 값이 결정되면 굳이 루프를 돌 필요 없이 부등식 계산으로 끝낼 수 있음
*/
function solutionFail(k, d) {
  const max = Math.floor(d / k)
  let count = 0
  
  for (let a = 0; a <= max; a++) { // x축
    for (let b = 0; b <= max; b++) { // y축
      const current = [a * k, b * k]
      const l = Math.sqrt((a * k) ** 2 + (b * k) ** 2)
      
      if (l > d) {
        break
      } 
      count += 1
    }
  }
  return count
}

const k = 1
const d = 5

console.log(solution(k, d))