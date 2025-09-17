class Account {
  #balance;
  constructor(initialBalance) {
    this.#balance = initialBalance;
  }
  deposit(amount) {
    this.#balance += amount;
  }
  getBalance() {
    return this.#balance;
  }
}

const acc = new Account(1000);
acc.deposit(500);
console.log(acc.getBalance()); // 1500
// console.log(acc.#balance); ❌ Error (private)
