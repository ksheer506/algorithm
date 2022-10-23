const CALCULATE = {
  '+': (a, c) => Number(a) + Number(c),
  '-': (a, c) => Number(a) - Number(c),
  '*': (a, c) => Number(a) * Number(c),
}

function calculator(arr ,operator) {
  let calc = [...arr];
  let j = 1;
  
  while (j < calc.length) {
    if (calc[j] !== operator) {
      j += 2;
      continue;
    }
  
    const res = CALCULATE[operator](calc[j - 1], calc[j + 1]);
    calc.splice(j - 1, 3, res);
  }
  
  return calc;
}

function solution(expression) {
  // a. 숫자: 뒤에 연산자가 오는 연속 숫자, 맨 뒤에 오는 연속 숫자
  // b. 연산자
  const splitedExp = expression.match(/(\d{1,}($|(?=[^\d])))|[-\+\*]/g)
  const operations = [...new Set(expression.match(/[-\+\*]/g))];
  const priorities = [];

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

  // 2. 우선순위에 따라 계산하기(절댓값)
  const results = priorities.map((p) => {
    let calculation = splitedExp;
    
    for (let j = 0; j < p.length; j++) {
      calculation = calculator(calculation, p[j])
    }
    
    return Math.abs(calculation[0]);
  });

  // 4. results에서 최댓값 반환
  return Math.max(...results);
}

const expression = "100-200*300-500+20"
console.log(solution(expression));
