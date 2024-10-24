// 実引数に名前を渡したらその名前に挨拶する関数
function hello(name) {
  console.log(`こんにちは${name}さん`);
}

hello("Alice");
hello("Bob");

// 引数で受け取った数値の2倍を返す関数
function twice(int) {
  let ans = int * 2;
  return ans;
  // return int * 2; でもよい
}
const aaa = twice(10);
console.log(aaa);

// 数値を渡して偶数なら「偶数」、奇数なら「奇数」と文字列を返す関数
function even_or_odd(int) {
  if (int % 2 === 0) {
    return "偶数";
  }
  return "奇数";
}
const result_a = even_or_odd(24);
console.log(result_a);
const result_b = even_or_odd(15);
console.log(result_b);
