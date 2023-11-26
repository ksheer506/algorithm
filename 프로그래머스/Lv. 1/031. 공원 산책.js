const DIRECTION = {
  N: (n) => [0, -n],
  S: (n) => [0, +n],
  W: (n) => [-n, 0],
  E: (n) => [+n, 0]
}

const findPosition = (once, v) => (park) => park.reduce((a, c, y) => {
  if (once && a.length > 1) {
    return a
  }

  for (let x = 0; x < c.length; x++) {
    if (c[x] === v) {
      a.push([x, y])
    }
  }
  return a
}, [])

const isBounded = (v, min, max) => v >= Math.min(min, max) && v <= Math.max(min, max)

const findStart = findPosition(true, 'S')
const findObstacles = findPosition(false, 'X')

function solution(park, routes) {
  const [sX, sY] = findStart(park)[0]
  const obs = findObstacles(park)
  const current = [sX, sY]
  
  const maxX = park[0].length - 1
  const maxY = park.length - 1

  const isOut = (dX, dY) => (current[0] + dX < 0 || current[0] + dX > maxX) || (current[1] + dY < 0 || current[1] + dY > maxY)
  
  const hasObstacles = (dX, dY) => obs.some(([oX, oY]) => {
    if (dX !== 0) {
      return isBounded(oX, current[0], current[0] + dX) && oY === current[1]
    }
    if (dY !== 0) {
      return isBounded(oY, current[1], current[1] + dY) && oX === current[0]
    }
    return false
  })
  
  for (let i = 0; i < routes.length ; i++) {
    const [direction, step] = routes[i].split(' ')
    const [dX, dY] = DIRECTION[direction](step)
  
    if (isOut(dX, dY)) {
      continue
    }
    if (hasObstacles(dX, dY)) {
      continue
    }
    
    current[0] += dX
    current[1] += dY
  }

  return [current[1], current[0]]
}

const park = [
  "OXO",
  "XSX",
  "OXO"
]
const routes = ["E 2","S 2","W 1"]

console.log(solution(park, routes));