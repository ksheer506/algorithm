class Stack {
  #stack = []
  #cursor = 0
  #valueSet = new Set()
  #rawLength = 0
  
  constructor(data) {
    const L = data.length - 1
    
    for (let i = L; i >= 0; i--) {
      this.#stack.push(data[i])
      this.#valueSet.add(data[i])
    }
    this.#cursor = L
    this.#rawLength = L
  }
  
  pop() {
    const value = this.#stack[this.#cursor]
    
    this.#cursor -= 1
    return value
  }
  
  peek() {
    return this.#stack[this.#cursor]
  }
  
  has(v) {
    return this.#valueSet.has(v)
  }
  
  reset() {
    this.#cursor = this.#rawLength
  }
}

function solution(skill, skill_trees) {
  const stack = new Stack(skill)
  
  return skill_trees.reduce((a, c) => {
    for (let i = 0; i < c.length; i++) {
      const current = c[i]
      
      if (!stack.has(current)) {
        continue
      }
      if (stack.peek() !== current) {
        return a
      }
      stack.pop()
    }
    
    stack.reset()
    return a + 1
  }, 0);
}

const skill = "CBD"
const skillTrees = ["BACDE", "CBADF", "AECB", "BDA"]

console.log(solution(skill, skillTrees))