// 引数は複数設定できる
// 2つの数値を受け取り、その合計を計算する関数
function keisan(int1, int2) {
  return int1 + int2;
}
const result = keisan(25, 499);
console.log(result);

// デフォルト引数

function hello(name = "名無し") {
  return `こんにちは${name}さん`;
}
const name_result = hello();
console.log(name_result);

/*
check test Q1
名前を渡すと語尾に「さん」と敬称を足した文字列を返し、
オプションで敬称を指定できる関数
*/
function call_name(name, keisyo = "さん") {
  console.log(`${name}${keisyo}`);
}
call_name("黒田", "先生");
call_name("ひかる");
