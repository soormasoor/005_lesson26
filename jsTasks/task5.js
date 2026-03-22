const car = {
  _year: null,
  brand: "Toyota",

  set year(newYear) {
    if (this._year === null && typeof newYear === "number" && newYear >= 1886) {
      this._year = newYear;
      return;
    }

    console.log("Invalid year or year has already been declared.");
  },

  get year() {
    return this._year;
  },

  get age() {
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    return currentYear - this._year;
  },
};

car.year = 2020;
console.log(car.year);

car.year = 2024;
console.log(car.year);

console.log(car.age);
