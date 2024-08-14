class Stack {
  constructor() {
    this.stack = [];
  }

  // メソッド
  // itemをスタックに追加する
  push(item) {
    this.stack.push(item);
  }

  // スタックの一番上にある要素を削除して返すメソッド。スタックが空の場合はnullを返す
  pop() {
    if (this.stack.length == 0) {
      return "null";
    }
    return this.stack.pop();
  }

  // スタックの一番上にある要素を返す。ただしスタックからは削除しない
  // スタックが空の場合はnullを返す
  peek() {
    if (this.stack.length == 0) {
      return "null";
    }
    return this.stack[this.stack.length - 1];
  }

  // スタックが空であるかどうか確認する
  // 空の場合はtrue,そうでない場合はfalseを返す
  isEmpty() {
    if (this.stack.length == 0) {
      return true;
    } else {
      return false;
    }
  }
}

let stack = new Stack();
stack.push(10);
stack.push(20);
console.log(stack.peek()); // 20
console.log(stack.pop()); // 20
console.log(stack.pop()); // 10
console.log(stack.isEmpty()); // true
