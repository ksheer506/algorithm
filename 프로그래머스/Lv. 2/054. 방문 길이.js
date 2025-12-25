const DIRECTION_MAP = {
  L: { x: -1, y: 0 },
  R: { x: 1, y: 0 },
  U: { x: 0, y: 1 },
  D: { x: 0, y: -1 },
}

function solution(dirs) {
  let current = [0, 0]
  const trails = new Set()
  
  for (let i = 0; i < dirs.length; i++) {
    const [x0, y0] = current
    const { x, y } = DIRECTION_MAP[dirs[i]]
    
    const x1 = x0 + x
    const y1 = y0 + y
    
    if (x1 >= -5 && x1<= 5 && y1 >= -5 && y1 <= 5) {
      trails.add(`${x0},${y0}/${x1},${y1}`)
      // 반대 방향도 동일한 경로
      trails.add(`${x1},${y1}/${x0},${y0}`)
      current = [x1, y1]
    }
  }
  return trails.size / 2
}

const dirs = "LULLLLLLU" // 7

console.log(solution(dirs))