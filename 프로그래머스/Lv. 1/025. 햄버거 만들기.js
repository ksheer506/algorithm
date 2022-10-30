function solution(ingredient) {
  let cooked = 0;
  let str = ingredient.reduce((a, c) => a += `${c}`, "");
  
  const matchHamburger = (match) => {
    cooked++;
    
    return "";
  };
  
  while (true) {
    const prev = str;
  
    str = str.replace(/1231/, (m) => matchHamburger(m));
    console.log(prev, str);
    if (str === prev) break;
  }
  
  return cooked;
}

const ingredient = [1,1,2,1,2,3,1,3,1,2,3,1]
console.log(solution(ingredient));
