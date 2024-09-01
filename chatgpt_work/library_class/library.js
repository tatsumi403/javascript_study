class Library {
  constructor() {
    this.books = [];
  }

  // 本を追加するメソッド
  addBook(title, author) {
    this.books.push({ title: title, author: author, available: true });
  }

  // 本を貸し出すメソッド
  // このメソッドの修正から_20240901
  // 配列にオブジェクトがあることを意識してオブジェクト内の値を取得する
  borrowBook(title) {
    if (this.books.title == title) {
      if (this.books.available == true) {
        this.books.available = false;
        return "貸し出し成功!";
      } else {
        return "エラー!その本は貸し出しできません!";
      }
    } else {
      return "エラー!その本は貸し出しできません!";
    }
  }

  // 本を返却するメソッド
  returnBook(title) {
    if (this.books.title == title) {
      if (this.books.available == false) {
        this.books.available = true;
        return "返却成功!";
      } else {
        return "エラー!その本は返却できません!";
      }
    } else {
      return "エラー!その本は返却できません";
    }
  }

  // 作成中
  // 本が貸し出し可能か確認するメソッド
  isAvailable(title) {
    if (this.books.available) {
      return;
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
// console.log(library.isAvailable("1984")); // false

// 本の返却
console.log(library.returnBook("1984")); // 返却成功メッセージ
// console.log(library.isAvailable("1984")); // true

// デバッグ
// console.log(library.borrowBook("The Great Gatsby"));
console.log(library.books);
