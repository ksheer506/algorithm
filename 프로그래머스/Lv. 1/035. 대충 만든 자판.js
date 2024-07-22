function solution(keymap, targets) {
  const stroke = new Map()
  const answer = []
  
  for (let i = 0; i < keymap.length; i++) {
    const arrange = keymap[i]
    
    for (let j = 0; j < arrange.length; j++) {
      const char = arrange[j]
      const prevStroke = stroke.get(char) ?? j + 2
      
      stroke.set(char, Math.min(prevStroke, j + 1))
    }
  }
  
  for (let k = 0; k < targets.length; k++) {
    const current = targets[k]
    let minStrokes = 0
    
    for (let m = 0; m < current.length; m++) {
      const char = current[m]
      
      if (!stroke.has(char)) {
        minStrokes = -1
        break;
      }
      minStrokes += stroke.get(char)
    }
    answer.push(minStrokes)
  }

  return answer
}

const keymap = ["AGZ", "BSSS"]
const targets = ["ASA","BGZ"]

console.log(solution(keymap, targets))