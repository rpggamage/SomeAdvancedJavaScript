////////////////////////////this is the scope in javascript
// let a = 10;

// function outer() {
//     let b = 20;
//     function inner() {
//         let c = 30;
//         console.log(a, b, c);
//     }
//     inner();

// }

// outer();
/////////////////////////////This is how functions works/////
// function outer() {
//     let counter = 0;
//     function inner() {
//         counter++;
//         console.log(counter);
//     }
//     inner();
// }

// outer();
// outer();

// ////////////////This is function clusoer//////
// function outer() {
//     let counter = 0;
//     function inner() {
//         counter++;
//         console.log(counter);
//     }
//     return inner;
// }

// const fn = outer();
// fn();
// fn();
// /////////////////This is fuctinon curring/////
// function sum(a, b, c) {
//     return a + b + c;
// }

// //console.log(add(2, 3, 5));

// function curry(fn) {
//     return function (a) {
//         return function (b) {
//             return function (c) {
//                 return fn(a, b, c);
//             }
//         }
//     }
// }

// const curriedAdd = curry(sum);

// console.log(curriedAdd(2)(3)(5));

// //----------------->this is the break down of currying////////
// const add2 = curriedAdd(2);
// const add3 = add2(3);
// const add5 = add3(5);
// console.log(add5);
///////////////////////Next is "this" keyword////////
/////-------------> how it works without "this" keyword
// function sayMyName(name) {
//     console.log(`My name is ${name}`);
// }

// sayMyName("Ravi");

// ///////-------------> how it works with "this" keyword or implicit binding
// const person = {
//     name: "Ravi",
//     sayMyName: function () {
//         console.log(`My name is ${this.name}`);
//     }
// }
// person.sayMyName();

// ///////-------------> how it works with "this" keyword or explicit binding

// function sayMyName(name) { console.log(`My name is ${this.name}`) }

// sayMyName.call(person);

// // const name = "Superman";
// globalThis.name = "Superman";
// function Person(name) {
//     this.name = name;

// }

// const p1 = new Person("Kavi");//////************* "new" is used to create a new empty bjectq////////;
// const p2 = new Person("Ravindra Sharma");

// console.log(p1.name, p2.name);

// //////-----------> next is defaut binding
// sayMyName();/// if name is not define then it will take globalThis.name

//////next is the concept of prototypes
// function Person(fname, lname) {
//     this.fname = fname;
//     this.lname = lname;
// }

// const person1 = new Person("Ravi", "Sharma");
// const person2 = new Person("Bruce", "lee");

// person1.getFullName = function () { return this.fname + " " + this.lname; }
// console.log(person1.getFullName());
// // /////console.log(person2.getFullName());//// cannot do without "prototype" keyword
// Person.prototype.getFullName2 = function () { return this.fname + " " + this.lname; }
// console.log(person1.getFullName2());
// console.log(person2.getFullName2());//// No we use prototype  keyword

// //////////////------> now prototype inheritance
// function SuperHero(fname, lname) {
//     Person.call(this, fname, lname);
//     this.isSuperHero = true;
// }

// SuperHero.prototype.fightCrimes = function () {
//     console.log("I am fighting crimes");
// }

// SuperHero.prototype = Object.create(Person.prototype);
// const batman = new SuperHero("Bruce", "Wayne");
// SuperHero.prototype.constructor = SuperHero;
// console.log(batman.getFullName2());///// this is shuld be second function with 2///

// //////////////next concept is to use "class" keyword
// class Person {
//     constructor(fname, lname) {
//         this.fname = fname;
//         this.lname = lname;
//     }
//     SayMyName() {
//         console.log(`My name is ${this.fname} ${this.lname}`);
//     }

// }

// const classPerson1 = new Person("Bruce", "Wayne");
// classPerson1.SayMyName();

// class SuperHero extends Person {
//     constructor(fname, lname) {
//         super(fname, lname);
//         this.isSuperHero = true;
//     }
//     fightCrimes() {
//         console.log("I am fighting crimes");
//     }
// }

// const batman = new SuperHero("Bruce", "Wayne");
// batman.SayMyName();
// batman.fightCrimes();

/////////////////////////////////next topic is iterators and iterables

const obj = {
    [Symbol.iterator]: function () {


        let step = 0;
        const iterator = {
            next: function () {
                step++;
                if (step === 1) {
                    return { value: "Hello", done: false }
                }
                else if (step === 2) {
                    return { value: "world", done: false }
                }
                else if (step === 3) {
                    return { value: "!", done: false }
                }
                else {
                    return { value: undefined, done: true }
                }
            }
        }
        return iterator;

    }
}
for (const word of obj) {
    console.log(word);
}