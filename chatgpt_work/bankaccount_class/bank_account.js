const { Breadcrumbs } = require("@aws-amplify/ui-react");

class BankAccount {
  // コンストラクタで引数balanceを受け取り初期化
  constructor(balance) {
    this.balance = balance;
  }

  // 現在のbalanceにamountを足すメソッド
  deposit(amount) {
    this.balance += amount;
  }
  // 現在のbalanceからamountを引くメソッド
  // ただし、現在のbalanceがamountよりも少ない場合はメッセージを返す
  withdraw(amount) {
    if (this.balance < amount) {
      return "Insufficient funds";
    }
    this.balance -= amount;
  }
  // 現在のbalanceを返すメソッド
  getBalance() {
    return this.balance;
  }
}

// BankAccountクラスをインスタンス化
let bankAccount = new BankAccount(10000);
let amount = 4000;

// 10000
console.log(bankAccount.getBalance());

// 10000-4000=6000
bankAccount.withdraw(amount);
console.log(bankAccount.getBalance());

// 6000-4000=2000
bankAccount.withdraw(amount);
console.log(bankAccount.getBalance());

// 2000-4000=-2000="Insufficient funds"
console.log(bankAccount.withdraw(amount));

// 2000+4000=8000
bankAccount.deposit(amount);
console.log(bankAccount.getBalance());
