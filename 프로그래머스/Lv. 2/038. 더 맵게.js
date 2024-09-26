/** index 1부터 트리 시작 */
class MinHeap {
  #heap
  
  constructor() {
    this.#heap = [null]
  }
  
  #getParentIndex(index) {
    return Math.floor(index / 2)
  }
  
  #getLeftChildIndex(index) {
    return index * 2
  }
  
  #getRightChildIndex(index) {
    return index * 2 + 1
  }
  
  #arrangeUp() {
    let cIdx = this.size
    
    while (cIdx > 1) {
      const pIdx = this.#getParentIndex(cIdx)
      const current = this.#heap[cIdx]
      const parent = this.#heap[pIdx]
      
      if (current >= parent) {
        break
      }
      // 자식이 부모보다 작으면 위로 올려야 함
      this.#heap[pIdx] = current
      this.#heap[cIdx] = parent
      
      cIdx = pIdx
    }
  }
  
  #arrangeDown() {
    let cIdx = 1
    
    while (this.#getLeftChildIndex(cIdx) <= this.size) {
      const leftIdx = this.#getLeftChildIndex(cIdx)
      const rightIdx = this.#getRightChildIndex(cIdx)
      
      const current = this.#heap[cIdx]
      // left는 while 조건에서 검사했으므로 존재함
      const left = this.#heap[leftIdx]
      // right는 존재하지 않을 수도 있으므로 Infinity로 설정해 항상 current <= right이도록 함
      const right = this.#heap[rightIdx] ?? Infinity
      
      if (current <= left && current <= right) {
        break
      }
      const isLeftSmall = left < right
      
      if (isLeftSmall) {
        this.#heap[leftIdx] = current
        this.#heap[cIdx] = left
        
        cIdx = leftIdx
      } else {
        this.#heap[rightIdx] = current
        this.#heap[cIdx] = right
        
        cIdx = rightIdx
      }
    }
  }
  
  // 배열의 마지막에 요소 삽입 후 위쪽으로 재정렬
  insert(value) {
    this.#heap.push(value)
    this.#arrangeUp()
    
    return this
  }
  
  // 배열의 1번째 요소 추출하고 마지막 요소를 1번째로 삽입 후, 아래쪽으로 재정렬
  extractMin() {
    if (this.size <= 1) { 
      return this.#heap.pop() ?? null
    }
    const min = this.peekMin()
    
    this.#heap[1] = this.#heap.pop()
    this.#arrangeDown()
    
    return min
  }
  
  peekMin() {
    return this.#heap[1] ?? null
  }
  
  get size() {
    return this.#heap.length - 1
  }
}

function solution(scoville, K) {
  const heap = scoville.reduce((a, c) => a.insert(c), new MinHeap())
  let count = 0
  
  while (heap.peekMin() < K) {
    if (heap.size <= 1) {
      return -1
    }
    const min = heap.extractMin()
    const nextMin = heap.extractMin()
    const nextScoville = min + nextMin * 2
    
    heap.insert(nextScoville)
    count += 1
  }
  
  return count
}

const scoville = [1, 2, 3, 9, 10, 12]
const k = 7

console.log(solution(scoville, k))