class Animal {
  constructor(name) {
    this._name = name;
  }

  get name() {
    return `Animal: ${this._name}`;
  }

  set name(name) {
    if (name) {
      this._name = name;
    }
  }
}

class Dog extends Animal {
  get name() {
    return `Dog: ${this._name}`;
  }
}

const dog = new Dog('test 1');
console.log(dog.name);

const animal = new Animal('test 2');
console.log(animal.name);
