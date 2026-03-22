const account = {
  _transactions: [],

  deposit(amount) {
    if (typeof amount === "number" && amount > 0) {
      this._transactions.push(amount);
      return;
    }
    console.log("Invalid deposit amount.");
  },

  get balance() {
    return this._transactions.reduce((sum, curr) => sum + curr, 0);
  },
};

Object.defineProperty(account, "_transactions", {
  writable: false,
  enumerable: false,
  configurable: false,
});

account.deposit(1000);
account.deposit(500);

console.log(account.balance);
console.log(account._transactions);
console.log(Object.keys(account));
console.log(Object.getOwnPropertyDescriptor(account, "_transactions"));
