import sayHello2022 from "./function";

function sayHello(name: string) {
    return `Hello from ${name}`;
}

let hiName = "TypeScript";
console.log(sayHello(hiName));




console.log('sayHello2022', sayHello2022('1111'));



interface SearchFunc {
  (source: string, subString: string): boolean;
}

let mySearch: SearchFunc;
mySearch = function(source: string, subString: string) {
  return source.search(subString) !== -1;
}

//可选参数
function buildName(firstName: string, lastName?: string) {
  if (lastName) {
      return firstName + ' ' + lastName;
  } else {
      return firstName;
  }
}
let tomcat = buildName('Tom', 'Cat');
let tom1 = buildName('Tom');

// 参数默认值
function buildName1(firstName: string, lastName: string = 'Cat') {
  return firstName + ' ' + lastName;
}


function push(array, ...items) {
  items.forEach(function(item) {
      array.push(item);
  });
}

let a: any[] = [];
push(a, 1, 2, 3);


//元组
let tom3: [string, number] = ['Tom', 25];


//枚举
enum Days {Sun, Mon, Tue, Wed, Thu, Fri, Sat};
console.log(Days["Sun"] === 0); // true
console.log(Days["Mon"] === 1); // true
console.log(Days["Tue"] === 2); // true
console.log(Days["Sat"] === 6); // true

console.log(Days[0] === "Sun"); // true
console.log(Days[1] === "Mon"); // true
console.log(Days[2] === "Tue"); // true
console.log(Days[6] === "Sat"); // true