<img src="https://img.shields.io/badge/-JavaScript-000000.svg?style=for-the-badge&logo=JavaScript&logoColor=F7DF1E">

次の要件に従って、Stack クラスを作成してください。

## プロパティ:

stack（スタック内の要素を保持する配列、初期値は空の配列）

# メソッド:

**push(item):**  
引数として受け取った item をスタックに追加するメソッド。

**pop():**  
スタックの一番上にある要素を削除して返すメソッド。スタックが空の場合は null を返す。

**peek():**  
スタックの一番上にある要素を返すメソッド。ただし、スタックからは削除しない。  
スタックが空の場合は null を返す。

**isEmpty():**  
スタックが空であるかどうかを確認し、空の場合は true、そうでない場合は false を返すメソッド。

> // 例: Stack クラスのインスタンス化とメソッドの使用例
> let stack = new Stack();
> stack.push(10);
> stack.push(20);
> console.log(stack.peek()); // 20
> console.log(stack.pop()); // 20
> console.log(stack.pop()); // 10
> console.log(stack.isEmpty()); // true

### 要件:

- Stack クラスを作成し、上記のメソッドを実装してください。
- インスタンスを作成し、いくつかの要素をスタックに追加したり、取り出したりして、各メソッドが正しく動作することを確認してください。
