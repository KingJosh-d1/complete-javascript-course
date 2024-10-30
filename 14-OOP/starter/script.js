'use strict';
/*
// Constructor function
const Person = function (firstName, birthYear) {
  // Instance properties
  this.firstName = firstName;
  this.birthYear = birthYear;

  // Never do this
  //   this.calcAge = function(){
  //     console.log(2037 - this.birthYear);
  //   };
};

const jonas = new Person('Jonas', 1991);
console.log(jonas);

// 1. new {} is created
// 2. Function is called, this = {}
// 3. {} linked to prototype
// 4. function automatically returns {}

const matilda = new Person('Matilda', 2017);
const jack = new Person('Jack', 1975);
console.log(matilda, jack);

console.log(jonas instanceof Person);

Person.hey = function () {
  console.log('Hey there 👋');
  console.log(this);
};
Person.hey();

// Prototypes
console.log(Person.prototype);

Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

jonas.calcAge();
matilda.calcAge();

console.log(jonas.__proto__);
console.log(jonas.__proto__ === Person.prototype);

console.log(Person.prototype.isPrototypeOf(jonas));
console.log(Person.prototype.isPrototypeOf(matilda));
console.log(Person.prototype.isPrototypeOf(Person));

// .prototypeOfLinkedObjects

Person.prototype.species = 'Homo Sapiens';
console.log(jonas.species, matilda.species);

console.log(jonas.hasOwnProperty('firstName'));
console.log(jonas.hasOwnProperty('species'));

console.log(jonas.__proto__);
// Object.prototype (type of prototype chain)
console.log(jonas.__proto__.__proto__);
console.log(jonas.__proto__.__proto__.__proto__);

console.dir(Person.prototype.constructor);

const arr = [3, 6, 4, 5, 6, 9, 3]; // New Array === []
console.log(arr.__proto__);
console.log(arr.__proto__ === Array.prototype);

console.log(arr.__proto__.__proto__);

Array.prototype.unique = function () {
  return [...new Set(this)];
  };
  
  console.log(arr.unique());
  
  const h1 = document.querySelector('h1');
  console.dir(h1);
  console.dir(x => x + 1);
  
  ////////////////////////////////////////////////////////////////////////////////////////
  
  const Car = function (make, speed) {
    this.make = make;
    this.speed = speed;
    };
    
    Car.prototype.accelerate = function () {
      this.speed += 10;
      console.log(`${this.make} is going at ${this.speed}km/h`);
      };
      
      Car.prototype.brake = function () {
        this.speed -= 5;
        console.log(`${this.make} is going at ${this.speed}km/h`);
        };
        
        const bmw = new Car('BMW', 120);
        const mercedes = new Car('Mercedes', 95);
        
        bmw.accelerate();
        bmw.accelerate();
        bmw.brake();
        bmw.accelerate();

////////////////////////////////////////////////////////////////////////////////////////
       
       // class expression
       // const PersonCl = class {}
       
       // class declaration
       class PersonCl {
         constructor(fullName, birthYear) {
           this.fullName = fullName;
           this.birthYear = birthYear;
           }
           
           // Instance methods
           // Methods will be added to .prototype property
           calcAge() {
             console.log(2037 - this.birthYear);
             }
             
             greet() {
               console.log(`Hey ${this.fullName}`);
               }
               
  get age() {
    return 2037 - this.birthYear;
  }

  set fullName(name) {
    console.log(name);
    if (name.includes(' ')) this._fullName = name;
    else alert(`${name} is not a full name!`);
  }

  get fullName() {
    return this._fullName;
  }

  // Static method
  static hey() {
    console.log('Hey there 👋');
    console.log(this);
  }
}

const jessica = new PersonCl('Jessica Davis', 1996);
console.log(jessica);
jessica.calcAge();
console.log(jessica.age);

console.log(jessica.__proto__ === PersonCl.prototype);

// PersonCl.prototype.greet = function(){
//   console.log(`Hey ${this.fullName}`);
// };
jessica.greet();

// 1. Classes are NOT hoisted
// 2. Classes are first-class citizens
// 3. Classes are executed in strict mode

// const walter = new PersonCl('Walter', 1965);
const walter = new PersonCl('Walter White', 1965);

PersonCl.hey();

const account = {
  owner: 'Jonas',
  movements: [200, 530, 120, 300],

  get latest() {
    return this.movements.slice(-1).pop();
  },

  set latest(mov) {
    this.movements.push(mov);
  },
};

// We use the 'latest' element as a property
console.log(account.latest);

account.latest = 50;
console.log(account.movements);

////////////////////////////////////////////////////////////////////////////////////////

const PersonProto = {
  calcAge() {
    console.log(2037 - this.birthYear);
  },
  
  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

// Object.create => makes empty object
const steven = Object.create(PersonProto);
console.log(steven);
steven.name = 'Steven';
steven.birthYear = 2002;
steven.calcAge();

console.log(steven.__proto__ === PersonProto);

const sarah = Object.create(PersonProto);
sarah.init('Sarah', 1979);
sarah.calcAge();

////////////////////////////////////////////////////////////////////////////////////////

class CarCl {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }
  
  accelerate() {
    this.speed += 10;
    console.log(`${this.make} is going at ${this.speed}km/h`);
  }
  
  brake() {
    this.speed -= 5;
    console.log(`${this.make} is going at ${this.speed}km/h`);
  }
  
  get speedUS() {
    return this.speed / 1.6;
  }
  
  set speedUS(speed) {
    this.speed = speed * 1.6;
  }
}

const ford = new CarCl('Ford', 120);
console.log(ford.speedUS);
ford.accelerate();
ford.accelerate();
ford.brake();
ford.speedUS = 50;
console.log(ford);

////////////////////////////////////////////////////////////////////////////////////////

// Inheritance Between 'Classes': Constructor Functions

const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

const Student = function (firstName, birthYear, course) {
  // this.firstName = firstName;
  // this.birthYear = birthYear;
  Person.call(this, firstName, birthYear);
  this.course = course;
};

Student.prototype.introduce = function () {
  console.log(`My name is ${this.firstName} and I study ${this.course}`);
};

const mike = new Student('Mike', 2020, 'Computer Science');
mike.introduce();

////////////////////////////////////////////////////////////////////////////////////////
// CHALLENGE 3

const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

Car.prototype.accelerate = function () {
  this.spees += 10;
  console.log(`${this.make} is going at ${this.speed}km/h`);
};

Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(`${this.make} is going at ${this.speed}km/h`);
};

const EV = function (make, speed, charge) {
  Car.call(this, make, speed);
  this.charge = charge;
};

// Link the prototypes
EV.prototype = Object.create(Car.prototype);

EV.prototype.chargeBattery = function (chargeTo) {
  this.charge = chargeTo;
};

EV.prototype.accelerate = function () {
  this.speed += 20;
  this.charge--;
  console.log(
    `${this.make} is going at ${this.speed}km/h, with a charge of ${this.charge}`
  );
};

const tesla = new EV('Tesla', 120, 23);
tesla.chargeBattery(90);
console.log(tesla);
tesla.brake();
tesla.accelerate();

////////////////////////////////////////////////////////////////////////////////////////
// Inheritance Between 'Classes': ES6 Classes

class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }
  
  calcAge() {
    console.log(2037 - this.birthYear);
  }
  
  greet() {
    console.log(`Hey ${this.fullName}`);
  }
  
  get age() {
    return 2037 - this.birthYear;
  }
  
  set fullName(name) {
    if (name.includes(' ')) this._fullName = name;
    else alert(`${name} is not a full name!`);
  }
  
  get fullName() {
    return this._fullName;
  }
  
  // Static method
  static hey() {
    console.log('Hey there 👋');
    console.log(this);
  }
}

class StudentCl extends PersonCl {
  constructor(fullName, birthYear, course) {
    // Always needs to have this first!!
    super(fullName, birthYear);
    // if no properties are needed then there is no need for constructor ->
    // class StudentrCl extends PersonCl {}...
    this.course = course;
  }
  
  introduce() {
    console.log(`My name is ${this.fullName} and I study ${this.course}`);
  }
  
  calcAge() {
    console.log(
      `I'm ${
        2037 - this.birthYear
      } years old, but as a student I feel more like ${
        2037 - this.birthYear + 10
      }`
    );
  }
}

const martha = new StudentCl('Martha Jones', 2012, 'Computer Science');
martha.introduce();
martha.calcAge();

////////////////////////////////////////////////////////////////////////////////////////
// Inheritance Between 'Classes': Object.create

const PersonProto = {
  calcage() {
    console.log(2037 - this.birthYear);
    },
    
    init(firstName, birthYear) {
      this.firstName = firstName;
      this.birthYear = birthYear;
      },
      };
      
      const steven = Object.create(PersonProto);
      
      const StudentProto = Object.create(PersonProto);
      
      StudentProto.init = function (firstName, birthYear, course) {
        PersonProto.init.call(this, firstName, birthYear);
        this.course = course;
        };
        
        StudentProto.introduce = function () {
          console.log(`My name is ${this.firstName} and I study ${this.course}`);
          };
          
          const jay = Object.create(StudentProto);
          jay.init('Jay', 2010, 'Computer Science');
          jay.introduce();
          jay.calcage();

////////////////////////////////////////////////////////////////////////////////////////

// 1. Public fields
// 2. Private fields
// 3. Public methods
// 4. Private methods
// (there is also the static version)

class Account {
  // 1. Public fields (instances)
  locale = navigator.language;

  // 2. Private fields
  #movements = [];
  #pin;

  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    // initialising element that are now parameters
    // Protected property
    this.#pin = pin;
    // this._movements = [];
    // this.locale = navigator.language;

    console.log(`Thaks for openiung an account, ${owner}`);
  }

  // 3. Public methods
  // Public Interface
  getMovements() {
    return this.#movements;
  }

  deposit(val) {
    this.#movements.push(val);
    return this;
  }

  withdraw(val) {
    this.deposit(-val);
    return this;
  }

  requestLoan(val) {
    if (this.#approveLoan(val)) {
      this.deposit(val);
      console.log(`Loan approved`);
    }
    return this;
  }

  static helper() {
    console.log('Helper');
  }

  // 4. private methods
  #approveLoan(val) {
    return true;
  }
}

const acc1 = new Account('Jonas', 'EUR', 1111);

// We are not supposed to mess with the data therefor we should encapsulate this
// acc1._movements.push(250);
// acc1._movements.push(-140);

acc1.deposit(250);
acc1.withdraw(140);
acc1.requestLoan(1000);

// The user should not be able to acces this only the requestLoan.
// acc1.approveLoan(1000);
console.log(acc1.getMovements());

console.log(acc1);
Account.helper();

// console.log(acc1.#movements);
// console.log(acc1.#pin);
// console.log(acc1.#approveLoan(100));

// Chaining
acc1.deposit(300).deposit(500).withdraw(35).requestLoan(25000).withdraw(4000);
console.log(acc1.getMovements());

////////////////////////////////////////////////////////////////////////////////////////

class CarCl {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  accelerate() {
    this.speed += 10;
    console.log(`${this.make} is going at ${this.speed}km/h`);
  }

  brake() {
    this.speed -= 5;
    console.log(`${this.make} is going at ${this.speed}km/h`);
    return this;
  }

  get speedUS() {
    return this.speed / 1.6;
  }

  set speedUS(speed) {
    this.speed = speed * 1.6;
  }
}

class EVCl extends CarCl {
  #charge;
  constructor(make, speed, charge) {
    super(make, speed);
    this.#charge = charge;
  }

  chargeBattery(chargeTo) {
    this.#charge = chargeTo;
    return this;
  }

  accelerate() {
    this.speed += 20;
    this.#charge--;
    console.log(
      `${this.make} is going at ${this.speed}km/h, with a charge of ${
        this.#charge
      }`
    );
    return this;
  }
}

const rivian = new EVCl('Rivian', 120, 23);
console.log(rivian);
// console.log(rivian.#charge);
rivian
  .accelerate()
  .accelerate()
  .accelerate()
  .brake()
  .chargeBattery(50)
  .accelerate();

console.log(rivian.speedUS);
*/
