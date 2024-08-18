<img src="https://img.shields.io/badge/-JavaScript-000000.svg?style=for-the-badge&logo=JavaScript&logoColor=F7DF1E">

次の要件に従って、Queue クラスを作成してください。

## プロパティ:

queue（キュー内の要素を保持する配列、初期値は空の配列）

## メソッド:

**enqueue(item):**  
引数として受け取った item をキューの末尾に追加するメソッド。

**dequeue():**  
キューの先頭にある要素を削除して返すメソッド。キューが空の場合は null を返す。

**peek():**  
キューの先頭にある要素を返すメソッド。ただし、キューからは削除しない。キューが空の場合は null を返す。

**isEmpty():**  
キューが空であるかどうかを確認し、空の場合は true、そうでない場合は false を返すメソッド。

> // 例: Queue クラスのインスタンス化とメソッドの使用例  
> let queue = new Queue();  
> queue.enqueue(10);  
> queue.enqueue(20);  
> console.log(queue.peek()); // 10  
> console.log(queue.dequeue()); // 10  
> console.log(queue.dequeue()); // 20  
> console.log(queue.isEmpty()); // true

### 要件:

- Queue クラスを作成し、上記のメソッドを実装してください。
- インスタンスを作成し、いくつかの要素をキューに追加したり、取り出したりして、各メソッドが正しく動作することを確認してください。
