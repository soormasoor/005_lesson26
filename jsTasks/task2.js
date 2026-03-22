const person = {
  firstName: "Suren",
  lastName: "Aslanyan",

  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  },

  set fullName(newFullName) {
    const names = newFullName.split(" ");

    if (names.length < 2) {
      console.log("Invalid full name.");
      return;
    }

    this.firstName = names[0];
    this.lastName = names[names.length - 1];
  },
};

person.fullName = "John Doe";
console.log(person.firstName);
console.log(person.lastName);
console.log(person.fullName);

person.fullName = "John";
