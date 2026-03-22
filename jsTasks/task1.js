const user = {
  _name: null,
  get name() {
    if (this._name) {
      return this._name.toUpperCase();
    }
    return "No name detected. Please set a name first";
  },
  set name(newName) {
    if (typeof newName === "string" && newName.length >= 3) {
      this._name = newName;
      return;
    }
    console.log("Invaid name.");
  },
};

// console.log(user.name);

// user.name = "John";
// console.log(user.name);

// user.name = "Al";
