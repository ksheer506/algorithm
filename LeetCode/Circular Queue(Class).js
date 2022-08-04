class CircularQ {
  constructor(size) {
    this.queue = new Array(size + 1);
    this.size = size;
    this.front = 0;
    this.rear = 0;
  }

  get length() {
    return (this.rear - this.front + this.size + 1) % (this.size + 1);
  }

  enQueue(el) {
    // this.rear - this.front의 길이가 this.size + 1이면 꽉 찬 상태()
    // 그 상태에서 또 요소를 삽입하려고 하면 이미 꽉 찬 상태이므로 오버 플로우 에러를 내야 함
    if (this.rear === ((this.front + this.size) % (this.size + 1))) {
      throw new Error("Queue Overflow Error")
    }

    this.queue[this.rear] = el;
    this.rear = (this.rear + 1) % (this.size + 1);
  }
  deQueue() {
    // this.rear === this.front이면 빈 상태
    // 그 상태에서 또 요소를 뺄려고 하면 이미 빈 찬 상태이므로 언더 플로우 에러를 내야 함
    if (this.rear === this.front) {
      throw new Error("Queue Underflow Error")
    }

    const current = this.queue[this.front];
    this.queue[this.front] = undefined;
    this.front = (this.front + 1) % (this.size + 1);

    return current;
  }
}


const queue = new CircularQ(5);
queue.enQueue(1);
queue.enQueue(2);
queue.enQueue(3);
queue.enQueue(4);
queue.deQueue();
queue.deQueue();
queue.deQueue();
queue.enQueue(5);
queue.deQueue();
queue.deQueue();

console.log(queue);
console.log(queue.length);