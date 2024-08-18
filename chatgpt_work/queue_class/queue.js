class Queue {
  constructor() {
    this.queue = [];
  }

  // メソッド
  // itemをキューの末尾に追加する
  enqueue(item) {
    this.queue.push(item);
  }

  // キューの先頭にある要素を削除して返す
  dequeue() {
    if (this.queue.length === 0) {
      return null;
    } else {
      return this.queue.shift();
    }
  }

  //　キューの先頭にある要素を返す。キューからは削除しない。空の場合はnullを返す。
  peek() {
    if (this.queue.length === 0) {
      return null;
    } else {
      return this.queue[0];
    }
  }

  // キューが空であるかどうか確認する。
  isEmpty() {
    return this.queue.length === 0;
  }
}

let queue = new Queue();
queue.enqueue(10);
queue.enqueue(20);
console.log(queue.peek()); // 10
console.log(queue.dequeue()); // 10
console.log(queue.dequeue()); // 20
console.log(queue.isEmpty()); // true
