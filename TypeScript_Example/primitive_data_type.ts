
// 布尔值
let isDone: boolean = false;
let menuFlag: boolean = true;
// 布尔对象 Boolean创造的对象不是布尔值
let createdByNewBoolean: Boolean = new Boolean(1);
//Boolean也可以返回一个boolean值
let createdByBoolean: boolean = Boolean(1);


// 数值
let decLiteral: number = 6;
// 十六进制
let hexLiteral: number = 0xf00d;
// ES6 中的二进制表示法
let binaryLiteral: number = 0b1010;
// ES6 中的八进制表示法
let octalLiteral: number = 0o744;
let notANumber: number = NaN;
let infinityNumber: number = Infinity;


// 字符串
let myName: string = '111\tTom"ass';
let myName1: string = "111\thello\"asd";
console.log('myName=', myName, 'myName1=', myName1)
let myAge: number = 25;

// 模板字符串 其中 ` 用来定义 ES6 中的模板字符串，${expr} 用来在模板字符串中嵌入表达式
let sentence: string = `Hello, my name is ${myName}.I'll be ${myAge + 1} years old next month.`;


// 空值 void表示没有任何返回值的函数
function alertName(): void {
  alert('My name is Tom');
}

// 与 void 的区别是，undefined 和 null 是所有类型的子类型。也就是说 undefined 类型的变量，可以赋值给 number 类型的变量
let u: undefined = undefined;
let n: null = null;
let unusable: void = undefined;


let myFavoriteNumber: string = 'seven';
//如果是一个普通类型，在赋值过程中改变类型是不被允许的：
// myFavoriteNumber = 7;
// 但如果是 any 类型，则允许被赋值为任意类型。
let myFavoriteNumber1: any = 'seven';
myFavoriteNumber1 = 7;

// 联合类型
//变量如果在声明的时候，未指定其类型，那么它会被识别为任意值类型：
let myFavoriteNumber3: string | number;
myFavoriteNumber3 = 'seven';
myFavoriteNumber3 = 7;
//联合类型使用 | 分隔每个类型。
// myFavoriteNumber3 = true; 错误

//当 TypeScript 不确定一个联合类型的变量到底是哪个类型的时候，我们只能访问此联合类型的所有类型里共有的属性或方法
function getLength(something: string | number): number {
  return something.toString().length;
}


let b: Boolean = new Boolean(1);
let e: Error = new Error('Error occurred');
let d: Date = new Date();
let r: RegExp = /[a-z]/;


// 类型别名
type Name = string;
type NameResolver = () => string;
type NameOrResolver = Name | NameResolver;
function getName(n: NameOrResolver): Name {
    if (typeof n === 'string') {
        return n;
    } else {
        return n();
    }
}


type EventNames = 'click' | 'scroll' | 'mousemove';
function handleEvent(event: EventNames) {
    // do something
}

handleEvent('scroll');  // 没问题
// handleEvent('dblclick'); // 报错，event 不能为 'dblclick'

