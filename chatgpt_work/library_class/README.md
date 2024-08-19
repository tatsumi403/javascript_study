<img src="https://img.shields.io/badge/-JavaScript-000000.svg?style=for-the-badge&logo=JavaScript&logoColor=F7DF1E">

図書館システムをシミュレートするクラス Library を作成してください。  
このシステムでは、本の追加、貸し出し、返却、在庫確認などの操作が行えます。

## プロパティ:

books（図書リスト: 各本の情報を格納する配列）

## 本の情報のプロパティ:

各本はオブジェクトで表され、以下のプロパティを持ちます:

- title（タイトル）
- author（著者）
- available（貸し出し可能かどうかのフラグ: 初期値は true）

## メソッド:

- addBook(title, author):
  - 図書館に本を追加するメソッド。本のタイトルと著者を受け取り、新しい本を図書リストに追加します。
- borrowBook(title):
  - 指定されたタイトルの本を貸し出すメソッド。本が貸し出し可能であれば available を false に設定し、貸し出し成功のメッセージを返します。本が見つからない場合やすでに貸し出し中の場合はエラーメッセージを返します。
- returnBook(title):
  - 指定されたタイトルの本を返却するメソッド。返却に成功した場合、available を true に設定し、返却成功のメッセージを返します。本が見つからない場合やすでに返却済みの場合はエラーメッセージを返します。
- isAvailable(title):
  - 指定されたタイトルの本が貸し出し可能かどうかを確認するメソッド。利用可能であれば true、そうでなければ false を返します。

## 使用例

> // Library クラスのインスタンスを作成  
> let library = new Library();
>
> // 本を追加
> library.addBook("The Great Gatsby", "F. Scott Fitzgerald");  
> library.addBook("1984", "George Orwell");
>
> // 本の貸し出し
> console.log(library.borrowBook("1984")); // 貸し出し成功メッセージ  
> console.log(library.isAvailable("1984")); // false
>
> // 本の返却
> console.log(library.returnBook("1984")); // 返却成功メッセージ  
> console.log(library.isAvailable("1984")); // true

### 要件

- Library クラスを実装し、上記のメソッドを正しく動作させてください。
- 本の貸し出し、返却、在庫確認が正しく行えるようにしてください。
