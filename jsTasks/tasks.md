# JavaScript Tasks: Getters, Setters & Property Descriptors

## Task 1 — Basic Getter & Setter

Create an object `user` with a private `_name` property.

### Requirements

- Add a getter `name` that returns `_name` in uppercase
- Add a setter `name` that only accepts strings with length **3 or more**
- If the value is invalid, log `"Invalid name"`

### Input / Output

```js
user.name = "John";
console.log(user.name);
```

```js
"JOHN";
```

```js
user.name = "Al";
```

```js
"Invalid name";
```

---

## Task 2 — Full Name Computation

Create an object `person` with:

- `firstName`
- `lastName`

### Requirements

- Add a getter `fullName` that returns `"firstName lastName"`
- Add a setter `fullName` that splits the string and assigns both properties
- If the input is invalid, log `"Invalid full name"`

### Input / Output

```js
person.fullName = "John Doe";
console.log(person.firstName);
console.log(person.lastName);
console.log(person.fullName);
```

```js
"John";
"Doe";
"John Doe";
```

```js
person.fullName = "John";
```

```js
"Invalid full name";
```

---

## Task 3 — Controlled Property with Descriptor

Create an object `product` with a `price` property using `Object.defineProperty`.

### Requirements

- `price` must never be negative
- The property should be controlled through getter/setter logic
- Set:
  - `enumerable: true`
  - `configurable: false`

### Input / Output

```js
product.price = 2500;
console.log(product.price);
```

```js
2500;
```

```js
product.price = -100;
```

```js
"Price must be non-negative";
```

```js
console.log(delete product.price);
```

```js
false;
```

---

## Task 4 — Hidden Property + Descriptor Inspection

Create an object `account` with:

- `balance`
- hidden `_transactions`

### Requirements

- `_transactions` must be:
  - not enumerable
  - not writable
- Add a method `deposit(amount)` that:
  - updates `balance`
  - stores each deposit in `_transactions`
- Use `Object.getOwnPropertyDescriptor()` to inspect the descriptor

### Input / Output

```js
account.deposit(1000);
account.deposit(500);

console.log(account.balance);
console.log(account._transactions);
console.log(Object.keys(account));
console.log(Object.getOwnPropertyDescriptor(account, "_transactions"));
```

```js
1500
[1000, 500]
["balance", "deposit"]
{
  value: [1000, 500],
  writable: false,
  enumerable: false,
  configurable: false
}
```

---

## Task 5 — Smart Object with Validation + Read-only Field

Create an object `car` with:

- `brand`
- `year`

### Requirements

- `year` cannot be less than `1886`
- `year` can only be assigned once
- Add a getter `age` that returns the car age dynamically

### Input / Output

```js
car.year = 2020;
console.log(car.year);
```

```js
2020;
```

```js
car.year = 2024;
console.log(car.year);
```

```js
2020;
```

```js
console.log(car.age);
```

```js
Current year - 2020
```
