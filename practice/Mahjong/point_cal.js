// 麻雀の飜数を入力すると、その点数を表示する
// 作成中

class Mahjong {
  point_cal(x) {
    if (x == 0) {
      console.log("正しい飜数を入力してください");
    } else if (x == 1) {
      console.log("1000点");
    } else if (x == 2) {
      console.log("2000点");
    } else if (x == 3) {
      console.log("3900点");
    } else if (x == 4 || x == 5) {
      console.log("満貫");
    } else if (x == 6 || x == 7) {
      console.log("跳満");
    } else if (x == 8 || x == 9 || x == 10) {
      console.log("倍満");
    } else if (x == 11 || x == 12) {
      console.log("三倍満");
    } else {
      console.log("数え役満");
    }
  }
}

const readline = require("readline");
const aaa = new Mahjong();

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("飜数を入力してください: ", (input_yaku) => {
  aaa.point_cal(input_yaku);
  rl.close();
});
