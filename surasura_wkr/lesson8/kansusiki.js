/* 関数式
const 変数名 = function (引数1, 引数2, ...) {
  処理;
  return 戻り値;
}
*/

// 関数式を用いた関数定義
const anime = function (title, main_char) {
  console.log(`${title}の主人公は${main_char}です`);
};
anime("とある魔術の超電磁砲", "御坂美琴");

// 関数式練習
// 曜日を渡すと仕事が休みかどうか返す関数式
const job_day = function (day_of_week) {
  if (day_of_week === "土曜日" || day_of_week === "日曜日") {
    console.log(`今日は${day_of_week}なので仕事は休みです`);
  } else console.log(`今日は${day_of_week}なので仕事がんばれ`);
};
job_day("日曜日");
