class ShoppingCart {
  constructor() {
    this.items = [];
  }

  // メソッド
  // item配列に追加するメソッド
  addItem(item, price) {
    this.items.push({ item, price });
  }

  // items内のすべてのアイテムの合計金額を計算して返すメソッド
  getTotal() {
    let totalAmount = 0;
    for (let i = 0; i < this.items.length; i++) {
      totalAmount += this.items[i].price;
    }
    return totalAmount;
  }

  // 配列を空にするメソッド
  clearCart() {
    this.items = [];
  }
}

let cart = new ShoppingCart();
cart.addItem("Apple", 100);
cart.addItem("Banana", 150);
console.log(cart.getTotal());
cart.clearCart();
console.log(cart.getTotal());
cart.addItem("Peach", 300);
cart.addItem("Orange", 200);
console.log(cart.getTotal());
cart.clearCart();
console.log(cart.getTotal());
