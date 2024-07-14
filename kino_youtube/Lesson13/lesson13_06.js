// クラスを定義
class Student {
  // メソッドを定義
  avg(math, english) {
    console.log((math + english) / 2);
  }
}

var a001 = new Student(); // インスタンス化
a001.avg(80, 70); // メソッドを実行
a001.name = "kuroda"; // プロパティを追加

console.log(a001.name);
console.log(a001.gender);
