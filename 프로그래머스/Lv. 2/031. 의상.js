function solution(clothes) {
  // 부위 → 옷 가짓수
  const closet = new Map();
  
  clothes.forEach(([_, type]) => {
    closet.set(type, (closet.get(type) ?? 0) + 1);
  })

  const types = [...closet.keys()];
  
  return [...closet.keys()].reduce((a, c) => a * (closet.get(c) + 1), 1) - 1

  /*
  const powerSet = [];
  
  // 1. 재귀함수 이용
  const power = (index, cases) => {
    if (index >= types.length) {
      powerSet.push(cases);
      return;
    }

    // 종류 types[index]를 가짓수에 포함 O 
    power(index + 1, cases * closet.get(types[index]));
    // 종류 types[index]를 가짓수에 포함 X
    power(index + 1, cases);
  };

  // power(0, 1);
  
  // 2. bitwise 연산 이용
  const L = types.length
  const size = 1 << L
  
  for (let i = 0; i < size; i++) {
    let cases = 1
    
    for (let j = 0; j < L; j++) {
      if (i & (1 << j)) {
        cases *= closet.get(types[j])
      }
    }
    powerSet.push(cases)
  }

  // 멱집합에서 []도 1로 계산되는 것 제외
  return powerSet.reduce((a, c) => a + c, -1);
  */
};

const clothes = [["yellow_hat", "headgear"], ["blue_sunglasses", "eyewear"], ["green_turban", "headgear"]]
const clothes2 = [["crow_mask", "face"], ["blue_sunglasses", "face"], ["smoky_makeup", "face"]]

console.log(solution(clothes))

/*
clothes 종류별로 분류했을 때 옷의 수 [2, 1, 3, 5, ...]
1. 입을 옷의 종류는 1, 2, 3, ..., N(<=closet.size)가지가 가능하므로 종류별 옷의 가짓수 배열에 대한 멱집합을 구하는 것과 같음

a. 재귀함수를 이용한 멱집합: 런타임 오류
b. bitwise를 이용한 멱집합: 시간 초과
  -> 멱집합을 하나하나 구해서 계산하는 건 비효율적
  
2. 경우의 수
  - 특정 의류를 입을 경우의 수: N
  - 특정 의류를 입지 않을 경우의 수: 1
각 종류에 대해 (N + 1)을 곱해주면 특정 의류를 입거나 입지 않을 경우의 수를 구할 수 있음. 마지막으로 아무것도 입지 않을 수는 없으므로 1을 빼주면 됨.
*/