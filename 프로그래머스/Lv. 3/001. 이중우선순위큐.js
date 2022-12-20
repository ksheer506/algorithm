const countsMap = new Map();

const getParentIdx = (idx) => {
  // idx = 0이면 루트 노드이므로 0을 반환해야 함
  return Math.floor(((idx || 1) - 1) / 2);
}

const swap = (idx1, idx2, heap) => {
  [heap[idx1], heap[idx2]] = [heap[idx2], heap[idx1]];
}

const removeItemIfNotExist = (heap, idx) => {
  const e = heap[idx];
  const remains = countsMap.get(e);

  if (remains >= 1) return false;

  heap.pop(); // 존재하지 않는 마지막 요소 제거
  return true;
}

const getValidLastIndex = (heap) => {
  let lastIdx = heap.length - 1;

  while (lastIdx > 0) {
    const removed = removeItemIfNotExist(heap, lastIdx);

    if (!removed) break;
    lastIdx--;
  }

  return lastIdx;
}

const insert_maxHeap = (heap, item) => {
  heap.push(item); // 1. 힙의 마지막 위치에 노드 삽입
  let cIdx = heap.length - 1;
  let pIdx = getParentIdx(cIdx); // 2. 부모 노드의 인덱스 찾음

  // 3. 부모 노드, 새 노드의 값을 비교하면서 위치를 바꾸는 작업 반복
  while (pIdx < cIdx && pIdx >= 0) {
    if (heap[cIdx] <= heap[pIdx]) break;

    // 4. 부모 노드의 값이 작을 때 부모 노드와 새 노드의 위치를 바꿈
    swap(cIdx, pIdx, heap);
    cIdx = pIdx;
    pIdx = getParentIdx(cIdx);
  }

  return heap;
}
const insert_minHeap = (heap, item) => {
  heap.push(item); // 1. 힙의 마지막 위치에 노드 삽입
  let cIdx = heap.length - 1;
  let pIdx = getParentIdx(cIdx); // 2. 부모 노드의 인덱스 찾음

  // 3. 부모 노드, 새 노드의 값을 비교하면서 위치를 바꾸는 작업 반복
  while (pIdx < cIdx && pIdx >= 0) {
    if (heap[cIdx] >= heap[pIdx]) break;

    // 4. 부모 노드의 값이 클 때 부모 노드와 새 노드의 위치를 바꿈
    swap(cIdx, pIdx, heap);
    cIdx = pIdx;
    pIdx = getParentIdx(cIdx);
  }

  return heap;
}

const reArrange_maxHeap = (heap) => {
  let rIdx = 0;
  let cIdx = [1, Math.min(2 * rIdx + 2, heap.length - 1)]; // 1. 자식 노드의 인덱스 설정

  while (cIdx[0] < heap.length) {
    const max = Math.max(heap[cIdx[0]], heap[cIdx[1]]);

    if (heap[rIdx] >= max) break; // 2. 해당 노드가 두 자식 노드보다 크면 정렬 완료  
    if (heap[cIdx[0]] >= heap[cIdx[1]]) { // 3-1. 해당 노드와 가장 큰 자식 노드를 교체 
      swap(rIdx, cIdx[0], heap);
      rIdx = cIdx[0]; // 3-2. 교체한 자식 노드의 인덱스로 해당 노드의 인덱스 재설정
    } else {
      swap(rIdx, cIdx[1], heap);
      rIdx = cIdx[1];
    }
    cIdx = [2 * rIdx + 1, Math.min(2 * rIdx + 2, heap.length - 1)]; // 4. 다음 루프의 자식 노드의 인덱스 재설정
  }
}

const reArrange_minHeap = (heap) => {
  let rIdx = 0;
  let cIdx = [1, Math.min(2 * rIdx + 2, heap.length - 1)]; // 1. 자식 노드의 인덱스 설정

  while (cIdx[0] < heap.length) {
    const min = Math.min(heap[cIdx[0]], heap[cIdx[1]]);

    if (heap[rIdx] <= min) break; // 2. 해당 노드가 두 자식 노드보다 작으면 정렬 완료  
    if (heap[cIdx[0]] <= heap[cIdx[1]]) { // 3-1. 해당 노드와 가장 작은 자식 노드를 교체 
      swap(rIdx, cIdx[0], heap);
      rIdx = cIdx[0]; // 3-2. 교체한 자식 노드의 인덱스로 해당 노드의 인덱스 재설정
    } else {
      swap(rIdx, cIdx[1], heap);
      rIdx = cIdx[1];
    }
    cIdx = [2 * rIdx + 1, Math.min(2 * rIdx + 2, heap.length - 1)]; // 4. 다음 루프의 자식 노드의 인덱스 재설정
  }
}

const extractMax = (heap) => {
  const lastI = getValidLastIndex(heap);
  swap(0, lastI, heap); // 1. 루트 노드와 마지막 노드를 교체
  const root = heap.pop(); // 2. 교체 전 루트 노드를 추출(최댓값) 

  reArrange_maxHeap(heap) // 3. 최대 힙을 유지하도록 힙을 재정렬 

  return root;
}

const extractMin = (heap) => {
  const lastI = getValidLastIndex(heap);
  swap(0, lastI, heap); // 1. 루트 노드와 마지막 노드를 교체
  const tail = heap.pop(); // 2. 교체 전 루트 노드를 추출(최솟값) 

  reArrange_minHeap(heap) // 3. 최대 힙을 유지하도록 힙을 재정렬 

  return tail;
}

const updateHeap = (heap) => {
  let prevL = heap.length;
  
  while (true) {
    const lastI = heap.length - 1;
    const removed = removeItemIfNotExist(heap, lastI);
    
    if (!removed) break;
  }
}

function solution(operations) {
  let synchronizeFlag = false;
  const maxHeap = [];
  const minHeap = [];

  for (let i = 0; i < operations.length; i++) {
    const [op, strEl] = operations[i].split(' ');
    const e = Number(strEl);

    if (synchronizeFlag) {
      updateHeap(maxHeap);
      updateHeap(minHeap);
      console.log('최신화', minHeap, maxHeap);
    }
    if (op === 'I') {
      insert_maxHeap(maxHeap, e);
      insert_minHeap(minHeap, e);
      
      countsMap.set(e, (countsMap.get(e) || 0) + 1);
      console.log('삽입', minHeap, maxHeap);
      synchronizeFlag = false;
      continue;
    }
    
    // 최댓값 제거
    if (op === 'D' && e > 0) {
      const max = maxHeap[0];
      countsMap.set(max, countsMap.get(max) - 1);
      extractMax(maxHeap);
    }
    // 최솟값 제거
    if (op === 'D' && e < 0) {
      const min = minHeap[0];
      countsMap.set(min, countsMap.get(min) - 1);
      extractMin(minHeap);
    }
    synchronizeFlag = true;
    console.log('제거', minHeap, maxHeap);
  }

  if (minHeap.length < 1) return 'EMPTY';

  return `${maxHeap[0]} ${minHeap[0]}`
}


// const operations = ["I -45", "I 653", "D 1", "I -642", "I 45", "I 97", "D 1", "D -1", "I 333"]
const operations = ["I 16", "I -5643", "D -1", "D 1", "D 1", "I 123", "D -1"]
console.log(solution(operations));
// console.log(solution(operations));