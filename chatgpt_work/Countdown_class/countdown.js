class Countdown {
  // コンストラクタでinitialValue(初期値)を初期化
  constructor(initialValue) {
    this.initialValue = initialValue;
    this.currentValue = initialValue;
  }
  // メソッド
  // 初期値を１ずつ減らすメソッド
  decrement() {
    this.currentValue--;
  }

  // 初期値を元の値にリセットするメソッド
  reset() {
    this.currentValue = this.initialValue;
  }

  // 現在の初期値を返すメソッド
  getValue() {
    return this.currentValue;
  }
}

let countdown = new Countdown(10);
console.log(countdown.getValue());

countdown.decrement();
countdown.decrement();
console.log(countdown.getValue());

countdown.reset();
console.log(countdown.getValue());
