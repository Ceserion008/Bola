// 1 - misola 

// Array.prototype.sum = function() {
//     return this.reduce((total, num) => total + num, 0);
// };

// const arr = [1, 2, 3, 4];
// console.log(arr.sum()); 


// 2 - misola 


// String.prototype.reverse = function() {
//     return this.split('').reverse().join('');
// };

// const str = "hello";
// console.log(str.reverse());


// 3  - misola 

// function Person(name) {
//     this.name = name;
// }

// Person.prototype.greet = function() {
//     return `Hello, my name is ${this.name}`;
// };

// const person = new Person("John");
// console.log(person.greet()); 

// 4 - misol 


// function Animal(type) {
//     this.type = type;
// }

// Animal.prototype.describe = function() {
//     return `This is a ${this.type}`;
// };

// const dog = new Animal("dog");
// const cat = new Animal("cat");

// console.log(dog.describe()); 
// console.log(cat.describe());


// 5 - misol 

// Array.prototype.customConcat = function(array) {
//     return this.concat(array);
// };

// const arr1 = [1, 2];
// const arr2 = [3, 4];
// console.log(arr1.customConcat(arr2)); 


// 6 - misola 

// Object.prototype.getKeys = function() {
//     return Object.keys(this);
// };

// const obj = { a: 1, b: 2, c: 3 };
// console.log(obj.getKeys()); 


// 7 - misola 


// function Example() {}

// Example.prototype.sayHello = function() {
//     return "Hello!";
// };

// const example = new Example();
// console.log(example.sayHello()); 

// delete Example.prototype.sayHello;
// console.log(example.sayHello); 


// 8 - misola 

// String.prototype.toUpperOptional = function() {
//     return this.toUpperCase();
// };

// const text = "hello";
// console.log(text.toUpperOptional()); 


// 9 - misola

// Array.prototype.average = function() {
//     return this.reduce((total, num) => total + num, 0) / this.length;
// };

// const arr = [1, 2, 3, 4];
// console.log(arr.average());


// 10 - misola 

// Object.prototype.isEmpty = function() {
//     return Object.keys(this).length === 0;
// };

// const obj = {};
// console.log(obj.isEmpty());

// const nonEmptyObj = { a: 1 };
// console.log(nonEmptyObj.isEmpty()); 



/////////////////////  


// class Animal{
//     constructor(name , species, sound) {
//         this.name = name 
//         this.species = species
//         this.sound = sound
//     }
//     speak(){
//         console.log(`${this.name} ${this.sound}`);
        
//     }
// }

// class dog extends Animal {
//     constructor(name , species, sound) {
//         super(name,species , sound ), {
//     }
// }

// }

// let dog = new dog("Rex" , "Wild" , "Wow")
// dog.speak()


// class ecommerce{
//     constructor(product , name, price , category) {
//         let product = product 
//         let price = price 
        
//     }
//     filterprice () {
//         console.log(Math.max(...this.price))
//         console.log(Math.min(...this.price))
        
//     }
// }

// const categoriesedPrice = new Product [1000 , 1200 , 1300]

// categoriesedPrice.filterprice()



// class Flight {
//     constructor(flightNumber , departureTime , destination , seatN) {
//         this.flightNumber = flightNumber
//         this.departure  = departureTime 
//         this.destination = destination
//         this.seat = seatN 
//     }
//     bookseat() {
//         if ( n < 50 ) 
//             console.log(`
//         ${this.flightNumber}
//         ${this.departure
            
//         }
//         ${this.destination}
//         ${n}
//         `);
            
//     }
//     getAvailableSeats(band, can ) {
//         console.log("Qolgan joy = " + this.seat - band + can)
//     }
// } 

// let travel = new Flight(101 , "13:30" , "Dubai" , 100)




// press f 



// function  getage(name , year) { 
//     this.name = name ; 
//     this.year = year ;

//     getage.prototype.Gerry =  function() {
//         console.log("Машине  " + this.name + " " + ( 2024 - (this.year) ) + " лет ");
        
//     }
// }

// let h = new getage("Toyota" , 2001)
// h.Gerry()


// class Animal {
//     constructor(name) {
//         this.name = name;

//     }

//     speak() {
//         console.log("Animal makes a noise");
        
//     }
// }

// let a = new Animal("Dog")
// a.speak()


// class Dog {
//   constructor(dogy) {
//     this.dogy = dogy


//   }
//   speak() {
//     console.log("Dog barks");
    
//   }
    
// }

// let dog = new Dog("Buddy")
// dog.speak()





// let brand = {
//   car : "BMW", 
//   doing() {
//     console.log( `The ${this.car} car is driving `);
    
//   }
// }

// brand.doing()


// try {
//   let x = y; // y не существует, ошибка
// } catch (error) {
//   console.log("An error occurred: " + error.message);
// } finally {
//   console.log("This will always run.");
// }



// class Car {
//   constructor (make , model , year) {
//     this.make = make , 
//     this.model = model , 
//     this.year = year 
//   }

//   carsmodel () {
//     console.log(`This is a ${this.year} ${this.make} ${this.model}.`);
    
//   }
// }
// let mycar = new Car("Mercedes" , "M1" , "2014")

// mycar.carsmodel()


// class Animal {
//   constructor (name) {
//     this.name = name 

//   }

//   speak() {
//     console.log("animal makes sound");
    
//   }
// }

// let a = new Animal("Dog")
// a.speak()

// class Dog extends Animal {
 

  
//   speak() {
//     console.log(`The ${this.name} barks `);
    
//   }
// }

// let n1 = new Dog("dog")
// n1.speak()
 








































