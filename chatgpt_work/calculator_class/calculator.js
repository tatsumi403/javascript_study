class Calculator {
  // メソッド
  // 2つの数値を引数として受け取り、その合計を返す
  add(a, b) {
    return a + b;
  }
  // 2つの数値を引数として受け取り、1つ目から2つ目を引いた結果を返す
  subtract(a, b) {
    return a - b;
  }
  // 2つの数値を引数として受け取り、その積を返す
  multiply(a, b) {
    return a * b;
  }
  // 2つの数値を引数として受け取り、1つ目を2つ目で割った結果を返す
  // 2つ目の数値が0の場合は"Cannot divide by zero"というメッセージを返す
  divide(a, b) {
    if (b === 0) {
      return "Cannot divide by zero";
    }
    return a / b;
  }
}
// Calculatorクラスのインスタンス化
let cal1 = new Calculator();
let a = 6;
let b = 0;

// 各メソッドを呼び出してコンソールに表示
console.log(cal1.add(a, b));
console.log(cal1.subtract(a, b));
console.log(cal1.multiply(a, b));
console.log(cal1.divide(a, b));
