class BinaryHeap {
  constructor() {
    this.heap = [];
  }

  #getParentIdx(idx) {
    return Math.floor(((idx || 1) - 1) / 2);
  }

  #swap(idx1, idx2) {
    [this.heap[idx1], this.heap[idx2]] = [this.heap[idx2], this.heap[idx1]];
  }
}

class DoublePriorityQueue {
  static #maxCallback = (a, b) => a <= b;
  static #minCallback = (a, b) => a >= b;

  #nodeMap = new Map();

  constructor() {
    this.maxHeap = [];
    this.minHeap = [];
  }

  #getParentIdx(idx) {
    return Math.floor(((idx || 1) - 1) / 2);
  }

  #swap(heap, idx1, idx2) {
    [heap[idx1], heap[idx2]] = [heap[idx2], heap[idx1]];
  }

  #removeNullifiedTail(heap) {
    while (true) {
      const lastI = heap.length - 1;
      const e = heap[lastI];
      const remains = this.#nodeMap.get(e); // 힙에 존재하는 해당 노드의 개수

      if (remains >= 1 || heap.length < 1) break;
      heap.pop(); // 존재하지 않으면 제거
    }
  }

  #insertItemToHeap(heap, item, callback) {
    heap.push(item); // 1. 힙의 마지막 위치에 노드 삽입

    let cIdx = heap.length - 1;
    let pIdx = this.#getParentIdx(cIdx); // 2. 부모 노드의 인덱스 찾음

    // 3. 부모 노드, 새 노드의 값을 비교하면서 위치를 바꾸는 작업 반복
    while (pIdx < cIdx && pIdx >= 0) {
      if (callback(heap[cIdx], heap[pIdx])) break;

      // 4. 부모 노드의 값이 작을 때 부모 노드와 새 노드의 위치를 바꿈
      this.#swap(heap, cIdx, pIdx);
      cIdx = pIdx;
      pIdx = this.#getParentIdx(cIdx);
    }

    this.#nodeMap.set(item, (this.#nodeMap.get(item) || 0) + 1);

    return heap;
  }

  #reArrangeMaxHeap() {
    let rIdx = 0;
    let cIdx = [1, Math.min(2 * rIdx + 2, this.maxHeap.length - 1)]; // 1. 자식 노드의 인덱스 설정

    while (cIdx[0] < this.maxHeap.length) {
      const max = Math.max(this.maxHeap[cIdx[0]], this.maxHeap[cIdx[1]]);

      if (this.maxHeap[rIdx] >= max) break; // 2. 해당 노드가 두 자식 노드보다 크면 정렬 완료  
      if (this.maxHeap[cIdx[0]] >= this.maxHeap[cIdx[1]]) { // 3-1. 해당 노드와 가장 큰 자식 노드를 교체 
        this.#swap(this.maxHeap, rIdx, cIdx[0]);
        rIdx = cIdx[0]; // 3-2. 교체한 자식 노드의 인덱스로 해당 노드의 인덱스 재설정
      } else {
        this.#swap(this.maxHeap, rIdx, cIdx[1]);
        rIdx = cIdx[1];
      }
      cIdx = [2 * rIdx + 1, Math.min(2 * rIdx + 2, this.maxHeap.length - 1)]; // 4. 다음 루프의 자식 노드의 인덱스 재설정
    }
  }

  #reArrangeMinHeap() {
    let rIdx = 0;
    let cIdx = [1, Math.min(2 * rIdx + 2, this.minHeap.length - 1)]; // 1. 자식 노드의 인덱스 설정

    while (cIdx[0] < this.minHeap.length) {
      const min = Math.min(this.minHeap[cIdx[0]], this.minHeap[cIdx[1]]);

      if (this.minHeap[rIdx] <= min) break; // 2. 해당 노드가 두 자식 노드보다 작으면 정렬 완료  
      if (this.minHeap[cIdx[0]] <= this.minHeap[cIdx[1]]) { // 3-1. 해당 노드와 가장 작은 자식 노드를 교체 
        this.#swap(this.minHeap, rIdx, cIdx[0]);
        rIdx = cIdx[0]; // 3-2. 교체한 자식 노드의 인덱스로 해당 노드의 인덱스 재설정
      } else {
        this.#swap(this.minHeap, rIdx, cIdx[1]);
        rIdx = cIdx[1];
      }
      cIdx = [2 * rIdx + 1, Math.min(2 * rIdx + 2, this.minHeap.length - 1)]; // 4. 다음 루프의 자식 노드의 인덱스 재설정
    }
  }

  #extractRoot(heap, type) {
    const lastI = heap.length - 1;
    this.#swap(heap, 0, lastI); // 1. 루트 노드와 마지막 노드를 교체
    const root = heap.pop(); // 2. 교체 전의 루트 노드를 추출


    if (type === "max") {
      this.#reArrangeMaxHeap() // 3. 최대 힙을 유지하도록 힙을 재정렬
    }
    if (type === "min") {
      this.#reArrangeMinHeap() // 3. 최대 힙을 유지하도록 힙을 재정렬 
    }

    return root;
  }

  insert(item) {
    const maxCallback = DoublePriorityQueue.#maxCallback;
    const minCallback = DoublePriorityQueue.#minCallback;

    this.#insertItemToHeap(this.maxHeap, item, maxCallback);
    this.#insertItemToHeap(this.minHeap, item, minCallback);
  }

  extractMax() {
    const max = this.maxHeap[0];

    this.#nodeMap.set(max, this.#nodeMap.get(max) - 1);
    this.#extractRoot(this.maxHeap, "max");

    this.#removeNullifiedTail(this.minHeap);

    return max;
  }

  extractMin() {
    const min = this.minHeap[0];

    this.#nodeMap.set(min, this.#nodeMap.get(min) - 1);
    this.#extractRoot(this.minHeap, "min");

    this.#removeNullifiedTail(this.maxHeap);

    return min;
  }

  get maximum() {
    return this.maxHeap[0];
  }

  get minimum() {
    return this.minHeap[0];
  }
}

// TODO: 최댓값, 최솟값 제거하고 나서 최대힙, 최소힙 동기화가 제대로 안 됨
const DPQ = new DoublePriorityQueue("max")

DPQ.insert(1)
DPQ.insert(3)
DPQ.insert(7)
DPQ.insert(2)
DPQ.insert(5)
console.log(DPQ.extractMax())

console.log(DPQ.extractMin())
DPQ.insert(0)
console.log(DPQ.extractMax())
console.log(DPQ.extractMax())
console.log(DPQ.extractMin())
console.log(DPQ);