// 「配列」に対するfor文を使った繰り返し処理
const array = ["生姜焼き", "ナポリタン", "麻婆豆腐"];

for (let i = 0; i < 3; i++) {
  console.log(array[i]);
}

// length を使った任意の長さの配列にする繰り返し処理
console.log("\nlength を使った任意の長さの配列にする繰り返し処理");
const array_any = ["生姜焼き", "ナポリタン", "麻婆豆腐", "カレー"];
const array_length = array_any.length;
for (let i = 0; i < array_length; i++) {
  console.log(array_any[i]);
}

// 配列を簡単に繰り返す方法
// for of文
console.log("\n配列を簡単に繰り返す方法 for...of文");
const mahjong_array = ["萬子", "索子", "筒子"];
for (let array_element of mahjong_array) {
  console.log(array_element);
}

// check test
// Q1
/* for...of文の書き方で正しいものは
A for (変数 of 配列)
B for (配列 of 変数)
→ A
*/
// Q2
/* 以下のコードが正常に動かない理由
const fruits = ['りんご', 'みかん', 'バナナ'];
for (const element of fruits) {
  element = element + '食べたい';
  console.log(element);
}
→変数をconstで宣言しているので再代入できない
for (let element of fruits) {
  element = element + '食べたい';
  console.log(element);
}
*/

// break文
console.log("\nbreak文 1から5まで出力");
for (let i = 1; i <= 10; i++) {
  if (i == 6) {
    break;
  }
  console.log(i);
}
