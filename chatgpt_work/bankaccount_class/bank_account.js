class BankAccount {
  // コンストラクタで引数balanceを受け取り初期化
  constructor(balance) {
    this.balance = balance;
    this.current_balance = this.balance;
  }

  // 現在のbalanceからamountを足すメソッド
  deposit(amount) {
    this.current_balance += amount;
  }
  // 現在のbalanceからamountを引くメソッド
  // ただし、現在のbalanceがamountよりも少ない場合はメッセージを返す
  withdraw(amount) {
    if (this.current_balance < amount) {
      return "Insufficient funds";
    }
    this.current_balance -= amount;
  }
  // 現在のbalanceを返すメソッド
  getBalance() {
    return this.current_balance;
  }
}

// BankAccountクラスをインスタンス化
let bank_account = new BankAccount(10000);
let amount = 4000;

// 10000
console.log(bank_account.getBalance());

// 10000-4000=6000
bank_account.withdraw(amount);
console.log(bank_account.getBalance());

// 6000-4000=2000
bank_account.withdraw(amount);
console.log(bank_account.getBalance());

// 2000-4000=-2000="Insufficient funds"
console.log(bank_account.withdraw(amount));

// 2000+4000=8000
bank_account.deposit(amount);
console.log(bank_account.getBalance());
