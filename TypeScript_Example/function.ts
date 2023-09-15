
//函数生命
function sum(x:number, y:number):number {
  return x + y;
}

//函数表达式
let mySum = function(x, y):number {
  return x + y;
}


//接口定义函数
interface SearchFunc {
  (source: string, subString: string): boolean;
}

let mySearch: SearchFunc;
mySearch = function(source: string, subString: string) {
  return source.search(subString) !== -1;
}
console.log(mySearch('111', '2'));


//可选参数 可选参数必须接在必需参数后面
function buildName(firstName: string, lastName?: string) {
  if (lastName) {
      return firstName + ' ' + lastName;
  } else {
      return firstName;
  }
}
let tomcat = buildName('Tom', 'Cat');
let tom1 = buildName('Tom');
console.log(tomcat, tom1);

//参数默认值
function buildName1(firstName: string, lastName: string = 'Cat') {
  return firstName + ' ' + lastName;
}
let tomcat1 = buildName1('Tom', 'Cat');
let tom2 = buildName1('Tom');

//剩余参数
function push(array, ...items) {
  items.forEach(function(item) {
      array.push(item);
  });
}
let a: any[] = [];
push(a, 1, 2, 3);
console.log(a);

//重载
// function reverse(x: number | string): number | string | void {
//   if (typeof x === 'number') {
//       return Number(x.toString().split('').reverse().join(''));
//   } else if (typeof x === 'string') {
//       return x.split('').reverse().join('');
//   }
// }

function reverse(x: number): number;
function reverse(x: string): string;
function reverse(x: number | string): number | string | void {
    if (typeof x === 'number') {
        return Number(x.toString().split('').reverse().join(''));
    } else if (typeof x === 'string') {
        return x.split('').reverse().join('');
    }
}



export default function sayHello2022(name: string) {
  return `Hello from ${name}`;
}





