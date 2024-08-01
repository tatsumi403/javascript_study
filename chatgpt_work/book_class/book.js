class Book {
  constructor(title, author, year) {
    this._title = title;
    this._author = author;
    this._year = year;
  }
  getTitle() {
    return this._title;
  }
  getAuthor() {
    return this._author;
  }
  getYear() {
    return this._year;
  }

  // メソッド
  // 戻り値は文字列で、形式は｀タイトル by 著者、出版年｀とする
  getSummary() {
    return `${this._title} by ${this._author}, ${this._year}`;
  }

  // メソッド
  // 現在の年から出版年を引いて、本の年齢を計算して返す
  // 例）2024年に呼び出された場合、出版年が2015年なら9年
  getAge() {
    // 現在の西暦を取得
    const current_year = new Date().getFullYear();
    return current_year - this._year;
  }

  // メソッド
  static compareAge(book1, book2) {
    const age1 = book1.getAge();
    const age2 = book2.getAge();
    return age1 > age2 ? book1 : book2;
  }
}

let book1 = new Book("世界一流エンジニアの思考法", "牛尾剛", 2023);
let book2 = new Book("リーダブルコード", "Dustin Boswell", 2012);
console.log(`book1 : ${book1.getSummary()}`);
console.log(`book2 : ${book2.getSummary()}`);
console.log(Book.compareAge(book1, book2).getTitle());
