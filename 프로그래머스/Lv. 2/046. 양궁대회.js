function solution(n, info) {
  let maxDiff = 0;
  let answer = [-1];
  
  // 2^11 = 2048가지 경우를 모두 탐색
  for (let mask = 0; mask < (1 << 11); mask++) {
    const ryan = Array(11).fill(0);
    let used = 0;
    
    // 각 점수(10점~0점)에 대해 가져갈지 결정
    for (let i = 0; i < 11; i++) {
      if (mask & (1 << i)) {
        // i점을 가져가려면 어피치보다 1개 더 필요
        ryan[i] = info[i] + 1;
        used += ryan[i];
      }
    }
    // 화살이 부족하면 불가능한 경우
    if (used > n) continue;
    
    // 남은 화살은 0점에 배치
    ryan[10] += n - used;
    
    // 점수 계산
    let ryanScore = 0;
    let apeachScore = 0;
    
    for (let i = 0; i < 11; i++) {
      const score = 10 - i;
      
      if (ryan[i] > info[i]) {
        ryanScore += score;
      } else if (info[i] > 0) {
        apeachScore += score;
      }
    }
    const diff = ryanScore - apeachScore;
    
    // 라이언이 이기지 못하면 무시
    if (diff <= 0) continue;
    
    // 더 큰 점수 차이를 찾았거나,
    // 같은 점수 차이일 때 낮은 점수를 더 많이 맞힌 경우
    if (diff > maxDiff || (diff === maxDiff && isBetter(ryan, answer))) {
      maxDiff = diff;
      answer = [...ryan];
    }
  }
  
  return answer;
}

// 낮은 점수를 더 많이 맞힌 경우를 판단 (10점 인덱스부터 역순 비교)
function isBetter(newArr, oldArr) {
  if (oldArr[0] === -1) return true;
  
  for (let i = 10; i >= 0; i--) {
    if (newArr[i] > oldArr[i]) return true;
    if (newArr[i] < oldArr[i]) return false;
  }
  return false;
}

function solutionFail(n, info) {
  const cases = 1 << 11
  let answer = [-1]

  for (let s = cases; s > 0; s--) {
    // bits의 각 원소는 0점(i=0)~10점(i=10)
    const bits = s.toString(2).padStart(11, "0").split('').map((v) => Number(v))
    let score = 0

    /* 1. 해당 점수에 대한 가능한 화살 조합 계산 */
    const combination = []
    let arrows = n
  
    for (let j = 0; j < 11; j++) {
      const isScored = !!bits[10 - j]
      // 점수를 얻었다면 어피치보다 1개는 더 맞춰야 함
      const current = Math.min((info[j] + 1) * (bits[10 - j] ?? 0), arrows)

      if (isScored && current <= 0) {
        /* 2. 조합이 불가하다면 다음 case로 넘어감 */
        break
      }
      // combination은 bits와 정반대 순서
      combination[j] = current
      arrows -= current
    }
    if (combination[10] === undefined) {
      continue
    }
    // bits[i]가 1이면 0, 0이면 Math.sign(c) 반영
    const apeachScore = info.reduce((a, c, i) => a + (bits[i] || Math.sign(c)) * (10 - i), 0)
    
    /* 3. 각 케이스별로 어피치보다 높은 점수를 얻었는지 계산 */
    for (let i = 0; i < 11; i++) {
      score += bits[i] * i
    }
    if (score > apeachScore) {
      answer = combination
    }
  }
  
  return answer;
}

/**
 * 각 점수에서 라이언이 맞춘 개수 A
 * 
 * 1. 탐욕법 ❌
 * 탐욕법은 매 순간 최선의 선택을 고르는 것인데 문제는 A보다 큰 "최소" 점수를 요구하고 있음
 * -> 탐욕법으로는 구할 수 없음
 * 
 * 2. 중복 조합 🟠
 * 11개 점수 구간에서 10발의 화살을 배분해서 각각의 경우에 대해 점수를 계산해서 비교해야 함: 11H10
*/

/**
 * 3. 각 구간 점수를 가져간다/안 가져간다 🟢
 * 11개 구간에서 가져간다/안 가져간다를 판단해서 각각의 경우에서 가능한 점수를 계산: 2^11 -> 2번 방법보다 적음
 * 
 * a. A를 구한다
 * b. 높은 점수 구간에서부터 2^11개 각각의 경우에서 점수를 계산
 * c-1. A보다 작으면 continue
 * c-2. A보다 큰 경우 d로 진행, 존재하지 않으면 continue
 * d. 높은 점수에 최소한의 화살(라이언보다 +1)을 분배하고 나머지는 가장 낮은 점수에 분배
*/

const n = 5	
const info = [2,1,1,1,0,0,0,0,0,0,0]

console.log(solution(n, info))