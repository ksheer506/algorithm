  function solution(food) {
  const dishes = [];
  let player1 = '';
  let player2 = '';
  
  for (let i = 1; i < food.length; i++) {
    const half = Math.floor(food[i] / 2);
    
    dishes.push(`${i}`.repeat(half));
  }
  for (let j = 0; j < dishes.length; j++) {
    player1 += dishes[j];
    player2 = `${dishes[j]}${player2}`;
  }

  return `${player1}0${player2}`
}

const food = [1, 3, 4, 6];
console.log(solution(food));

const a = Number('123')
console.log(a.toPrecision(2));
console.dir(a);