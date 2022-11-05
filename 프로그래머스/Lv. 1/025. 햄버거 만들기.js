function solution0(ingredient) {
  let cooked = 0;
  let str = ingredient.reduce((a, c) => a += `${c}`, "");
  
  const matchHamburger = (match) => {
    cooked++;
    
    return "";
  };
  
  while (true) {
    const prev = str;
  
    str = str.replace(/1231/, (m) => matchHamburger(m));
  
    if (str === prev) break;
  }
  
  return cooked;
}

function solution(ingredient) {
  let table = '';
  let hamburger = 0;
  // 1. ingredient의 원소를 배열에 하나씩 push
  for (let i = 0; i < ingredient.length; i++) {
    table += ingredient[i];
    
    if (table.length < 4) continue;
    // 2. 마지막 4개 원소가 [1,2,3,1]인지 확인
    if (tableStr.endsWith('1231')) {
      hamburger++;
      table = table.slice(0, -4);
    }
  }
  
  return hamburger;
}

const ingredient = [1,1,2,1,2,3,1,3,1,2,3,1]
console.log(solution(ingredient));

/* 
[1,1,2,1,2,3,1,3,1,2,3,1]
재료가 이렇게 중첩되어 있을 경우, 아래서부터 제거되기 때문에 햄버거가 3개 만들어지지만

현재 풀이대로면 112'1231'3'1231' 첫 루프 때 2개가 만들어지고, 그 다음 루프에서는 1123만 남아 총 햄버거는 2개가 됨 → X
*/