let Student = class {
  // コンストラクタ（初期化メソッド）
  constructor(name) {
    // プロパティ
    this.name = name;
  }
  avg(math, english) {
    console.log((math + english) / 2);
  }
};

// インスタンス = クラス
let a001 = new Student("kuroda");
console.log(a001.name);

let a002 = new Student("watanabe");
console.log(a002.name);