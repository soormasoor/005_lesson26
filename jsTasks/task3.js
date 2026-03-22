const product = {};

Object.defineProperty(product, "price", {
  enumerable: true,
  configurable: false,

  set(newPrice) {
    if (typeof newPrice === "number" && newPrice >= 0) {
      this._price = newPrice;
      return;
    }
    console.log("Price must be non-negative");
  },

  get() {
    return this._price ?? 0;
  },
});

// product.price = 2500;
// console.log(product.price);

// product.price = -100;

// console.log(delete product.price);
