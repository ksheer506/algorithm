/**
 * @param {number} k
 */
var MyCircularQueue = function (k) {
  this.queue = new Array(k + 1);
  this.size = k;
  this.front = 0;
  this.rear = 0;

  return null;
};

/** 
 * @param {number} value
 * @return {boolean}
 */
MyCircularQueue.prototype.enQueue = function (value) {
  if (this.rear === ((this.front + this.size) % (this.size + 1))) {
    return false;
  }

  this.queue[this.rear] = value;
  this.rear = (this.rear + 1) % (this.size + 1);

  return true;
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.deQueue = function () {
  if (this.rear === this.front) return false

  const current = this.queue[this.front];
  this.queue[this.front] = undefined;
  this.front = (this.front + 1) % (this.size + 1);

  return true;
};

/**
 * @return {number}
 */
MyCircularQueue.prototype.Front = function () {
  const front = this.queue[this.front];

  return front === undefined ? -1 : front;
};

/**
 * @return {number}
 */
MyCircularQueue.prototype.Rear = function () {
  const rear = this.queue[(this.rear + this.size) % (this.size + 1)];

  return rear === undefined ? -1 : rear;
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.isEmpty = function () {
  return this.rear === this.front;
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.isFull = function () {
  return this.rear === ((this.front + this.size) % (this.size + 1));
};

/** 
 * Your MyCircularQueue object will be instantiated and called as such:
 * var obj = new MyCircularQueue(k)
 * var param_1 = obj.enQueue(value)
 * var param_2 = obj.deQueue()
 * var param_3 = obj.Front()
 * var param_4 = obj.Rear()
 * var param_5 = obj.isEmpty()
 * var param_6 = obj.isFull()
 */
const myCircularQueue = new MyCircularQueue(8);
myCircularQueue.enQueue(3); // return True
myCircularQueue.enQueue(9); // return True
myCircularQueue.enQueue(5); // return True
myCircularQueue.enQueue(0); // return False
myCircularQueue.deQueue()
myCircularQueue.deQueue()

console.log(myCircularQueue.isEmpty());
console.log(myCircularQueue.isEmpty());
console.log(myCircularQueue.Rear());
console.log(myCircularQueue.Rear());
/* console.log(myCircularQueue.deQueue()); */


/* console.log(myCircularQueue.isFull());
myCircularQueue.enQueue(4)
console.log(myCircularQueue.Rear()); */

console.log(myCircularQueue);
