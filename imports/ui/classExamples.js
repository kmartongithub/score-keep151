// class Person {
//   constructor(name = 'Anonymous', age = 0) {
//     this.name = name;
//     this.age = age;
//   }
//   getGreeting() {
//     return `Hi! I am ${this.name}.`;
//   }
//   getPersonDesc() {
//     return `${this.name} is ${this.age} years old.`;
//   }
// }
//
// class Employee extends Person {
//   constructor(name, age, title) {
//     super(name, age);
//     this.title = title;
//   }
//   getGreeting() {
//     if (this.title) {
//       return `Hi! I am ${this.name}. I work as a ${this.title}.`
//     } else {
//       return super.getGreeting();
//     }
//   }
//   hasJob() {
//     return !!this.title;
//   }
// }
//
// class Programmer extends Person {
//   constructor(name, age, prefLang = 'assembly') {
//     super(name, age);
//     this.prefLang = prefLang;
//   }
//   getGreeting() {
//     return `Hi! I am ${this.name}. I am a ${this.prefLang} programmer.`;
//   }
// }
//
// // let me = new Person('Mike', 25);
// // console.log(me.getGreeting());
// // console.log(me.getPersonDesc());
//
// let userOne = new Programmer('Jason', 23, 'Java');
// console.log(userOne.getGreeting());
