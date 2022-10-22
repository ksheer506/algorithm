const CALCULATE = {
  '+': arr => arr.reduce((a, c) => a + c, 0),
  '-': arr => arr.reduce((a, c) => a - c, 0),
  '*': arr => arr.reduce((a, c) => a * c, 1),
}

function solution(expression) {
  // a. 숫자: 뒤에 연산자가 오는 연속 숫자, 맨 뒤에 오는 연속 숫자
  // b. 연산자
  const splited = expression.match(/(\d{1,}($|(?=[^\d])))|[-\+\*]/g)
  const operations = [...new Set(expression.match(/[-\+\*]/g))];
  const pairNumberIdx = new Map();
  const priorities = [];
  const results = [];

  // 1. 연산 우선순위 결정하기
  const permutation = (arr, selected) => {
    if (arr.length === operations.length) {
      priorities.push(arr);
      return;
    }

    for (let i = 0; i < operations.length; i++) {
      if (!selected.has(i)) {
        permutation([...arr, operations[i]], new Set([...selected, i]));
      }
    }
  }

  permutation([], new Set());
  
  // 2. 피연산자의 인덱스 찾기
  for (let j = 0; j < splited.length; j++) {
    const op = ['+', '-', '*'];
    
    if (op.includes(splited[j])) {
      const prev = pairNumberIdx.get(splited[j]) || [];
      
      // 연산자의 양 옆 숫자의 인덱스를 추가
      pairNumberIdx.set(splited[j], new Set([...prev, splited[j-1], splited[j+1]]));
    }
  }
  
  // 3. 우선순위에 따라 계산하기(절댓값)

  // 3. results에서 최댓값 반환
  return Math.max(...results);
}

const expression = '100-200*300-500+20'
console.log(solution(expression));