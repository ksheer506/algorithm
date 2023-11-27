function solution(wallpaper) {
  const C = wallpaper[0].length
  const R = wallpaper.length
  
  let minX = C
  let maxX = 0
  let minY = R
  let maxY = 0
  
  for (let i = 0; i < R; i++) {
    for (let j = 0; j < C; j++) {
      if (wallpaper[i][j] === '.') {
        continue
      }
      
      minX = Math.min(minX, j)
      maxX = Math.max(maxX, j)
      
      minY = Math.min(minY, i)
      maxY = Math.max(maxY, i)
    }
  }
  
  return [minY, minX, maxY + 1, maxX + 1]
}

const w1 = [
  ".##...##.", 
  "#..#.#..#", 
  "#...#...#", 
  ".#.....#.", 
  "..#...#..", 
  "...#.#...", 
  "....#...."
]

const w2 = ["..........", ".....#....", "......##..", "...##.....", "....#....."]

const w3 = [".#...", "..#..", "...#."]

console.log(solution(w3));