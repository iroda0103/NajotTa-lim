class Person {
  constructor(name) {
    this.name = name;
  }
  introdce() {
    console.log("Hello my name is" + this.name);
  }
}
class Students extends Person {
  constructor(name) {
    super(name);
  }
}
