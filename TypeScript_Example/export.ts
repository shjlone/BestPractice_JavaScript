
export default MyDirections;

declare enum MyDirections {
  Up,
  Down,
  Left,
  Right
}


export const name: string = 'TypeScript';
export function getName(): string {
  return 'TypeScript';
}

export class Animal {
  constructor(public name: string) { }
  sayHi(): string {
    return `My name is ${this.name}`;
  }
}

export enum Directions {
  Up,
  Down,
  Left,
  Right
}
export interface Options {
  data: any;
}



declare let age: number;
age = 20;
declare function sayHi(): string;
declare class Animal1 {
  constructor(name: string);
  sayHi(): string;
}

export { age, sayHi, Animal1 };



interface String {
  prependHello(): string;
}