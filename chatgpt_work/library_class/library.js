class Library {
  constructor() {
    this.books = [];
  }

  // 本を追加するメソッド
  addBook(title, author) {
    this.books.push({ title: title, author: author, available: true });
  }

  // 本を検索するヘルパーメソッド（重複コードを減らすため追加
  findBook(title) {
    return this.books.find((book) => book.title === title);
  }

  // 本を貸し出すメソッド
  borrowBook(title) {
    const book = this.findBook(title);
    if (book) {
      if (book.available) {
        book.available = false;
        return "貸し出し成功!";
      } else {
        return "エラー!その本は貸し出し中です!";
      }
    } else {
      return "エラー!その本は図書リストにありません!";
    }
  }

  // 本を返却するメソッド
  returnBook(title) {
    const book = this.findBook(title);
    if (book) {
      if (!book.available) {
        book.available = true;
        return "返却成功!";
      } else {
        return "エラー!その本はすでに返却されています!";
      }
    } else {
      return "エラー!その本は図書リストにありません!";
    }
  }

  // 本が貸し出し可能か確認するメソッド
  isAvailable(title) {
    const book = this.findBook(title);
    // 本が存在している場合はavailabilityを返し、見つからない場合はfalseを返す
    return book ? book.available : false;
  }
}

// Library クラスのインスタンスを作成
let library = new Library();
let available = true;
// 本を追加
library.addBook("The Great Gatsby", "F. Scott Fitzgerald");
library.addBook("1984", "George Orwell");

// 本の貸し出し
console.log(library.borrowBook("1984")); // 貸し出し成功メッセージ
console.log(library.isAvailable("1984")); // false

// 本の返却
console.log(library.returnBook("1984")); // 返却成功メッセージ
console.log(library.isAvailable("1984")); // true
