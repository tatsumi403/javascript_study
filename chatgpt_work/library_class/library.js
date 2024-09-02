class Library {
  constructor() {
    this.books = [];
  }

  // 本を追加するメソッド
  addBook(title, author) {
    this.books.push({ title: title, author: author, available: true });
  }

  // 本を貸し出すメソッド
  borrowBook(title) {
    let borrowMatchIndex = this.books.findIndex((book) => book.title === title);
    if (borrowMatchIndex !== -1) {
      if (this.books[borrowMatchIndex].available == true) {
        this.books[borrowMatchIndex].available = false;
        return "貸し出し成功!";
      } else {
        return "エラー!その本は貸し出しできません!";
      }
    } else {
      return "エラー!その本は図書リストにありません!";
    }
  }

  // 本を返却するメソッド
  returnBook(title) {
    let returnMatchIndex = this.books.findIndex((book) => book.title === title);
    if (returnMatchIndex !== -1) {
      if (this.books[returnMatchIndex].available == false) {
        this.books[returnMatchIndex].available = true;
        return "返却成功!";
      } else {
        return "エラー!その本は返却できません!";
      }
    } else {
      return "エラー!その本は返却できません";
    }
  }

  // 本が貸し出し可能か確認するメソッド
  isAvailable(title) {
    let availableMatchIndex = this.books.findIndex((book) => book.title === title);
    if (this.books[availableMatchIndex].available) {
      return true;
    } else {
      return false;
    }
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
