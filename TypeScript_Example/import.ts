import {name, getName, Animal, Directions, Options, age, Animal1, sayHi} from "./export";


console.log(name);
let myName = getName();
console.log(myName);

let cat = new Animal('Tom');
let directions = [Directions.Up, Directions.Down, Directions.Left, Directions.Right];
let options: Options = {
  data: {
    name: 'foo'
  }
};

console.log(age);
