class Person {
  // コンストラクタで名前と年齢を初期化
  constructor(name, age) {
    // プライベートプロパティ（アンダースコアは必須ではない）
    this._name = name;
    this._age = age;
  }
  // 挨拶を返すメソッド
  greet() {
    return `Hello, my name is ${this._name} and I am ${this._age} years old.`;
  }
}

// Personクラスのインスタンス化
let person1 = new Person("John", 30);

// greetメソッドを呼び出してコンソールに表示
console.log(person1.greet());
