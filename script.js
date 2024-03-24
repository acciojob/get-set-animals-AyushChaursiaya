// //complete this code
// class Animal {
// 	constructor(species) {
// 		this._species = species;
// 	}

// 	get species() {
// 		return this._species;
// 	}

// 	makeSound() {
// 		console.log(`The ${this._species} makes a sound`);
// 	}
// }

// class Dog extends Animal {
// 	constructor(species) {
// 		super(species);
// 	}
	
// 	bark() {
// 		super.makeSound("woof");
// 	}
// }

// class Cat extends Animal {
// 	constructor(species) {
// 		super(species);
// 	}
	
// 	purr() {
// 		super.makeSound("purr");
// 	}
// }

// const myCat = new Cat("Siamese");
// myCat.makeSound();
// myCat.purr();


// const myDog = new Dog("Golden Retriever");
// myDog.makeSound();
// myDog.bark();

// // // Do not change the code below this line
// // window.Animal = Animal;
// // window.Dog = Dog;
// // window.Cat = Cat;
class Animal {
  constructor(species) {
    this._species = species;
  }

  get species() {
    return this._species;
  }

  makeSound(sound) {
    console.log(`The ${this._species} makes a ${sound}`);
  }
}

class Cat extends Animal {
  constructor(species) {
    super(species);
  }

  purr() {
    super.makeSound("purr");
  }
}

class Dog extends Animal {
  constructor(species) {
    super(species);
  }

  bark() {
    super.makeSound("woof");
  }
}

// Example usage
const myCat = new Cat("Siamese");
myCat.makeSound("meow"); // Output: The Siamese makes a meow
myCat.purr(); // Output: The Siamese makes a purr

const myDog = new Dog("Golden Retriever");
myDog.makeSound("bark"); // Output: The Golden Retriever makes a bark
myDog.bark(); // Output: The Golden Retriever makes a woof
