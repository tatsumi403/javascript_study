class Book {
  // constructor(title, author, year) {
  //   this.title = title;
  //   this.author = author;
  //   this.year = year;
  // }

  // メソッド
  // 戻り値は文字列で、形式は｀タイトル by 著者、出版年｀とする
  getSummary(title, author, year) {
    let summary = title + " by " + author + ", " + year + "年";
    return summary;
  }
  // メソッド
  // 現在の年から出版年を引いて、本の年齢を計算して返す
  // 例）2024年に呼び出された場合、出版年が2015年なら9年
  // getAage() {
  //   return;
  // }

  // メソッド
  compareAge(book1, book2) {
    let more_old;
    return more_old;
  }
}

let book1 = new Book();
let title = "世界一流エンジニアの思考法";
let author = "牛尾剛";
let year = "2023";
let ans = book1.getSummary(title, author, year);
console.log(ans);
