<img src="https://img.shields.io/badge/-JavaScript-000000.svg?style=for-the-badge&logo=JavaScript&logoColor=F7DF1E">

以下の要件に基づいて ShoppingCart クラスを作成してください。

## プロパティ:

items（カートに追加されたアイテムのリスト、初期値は空の配列）

## メソッド:

**addItem(item, price):**  
item（商品名）と price（価格）を引数として受け取り、それをカート (items 配列) に追加するメソッド。

**getTotal():**  
カート内のすべてのアイテムの合計金額を計算して返すメソッド。

**clearCart():**  
カート内のアイテムをすべて削除し、items を空の配列にリセットするメソッド。

> // 例: ShoppingCart クラスのインスタンス化とメソッドの使用例  
> let cart = new ShoppingCart();  
> cart.addItem("Apple", 100);  
> cart.addItem("Banana", 150);  
> console.log(cart.getTotal()); // 250  
> cart.clearCart();  
> console.log(cart.getTotal()); // 0

### 要件:

- ShoppingCart クラスを作成し、上記のメソッドを実装してください。
- インスタンスを作成し、いくつかの商品をカートに追加して、合計金額を計算したり、カートをクリアしたりする操作を行ってください。
