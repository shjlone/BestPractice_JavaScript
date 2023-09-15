// 布尔值
var isDone = false;
var menuFlag = true;
// 布尔对象 Boolean创造的对象不是布尔值
var createdByNewBoolean = new Boolean(1);
//Boolean也可以返回一个boolean值
var createdByBoolean = Boolean(1);
// 数值
var decLiteral = 6;
// 十六进制
var hexLiteral = 0xf00d;
// ES6 中的二进制表示法
var binaryLiteral = 10;
// ES6 中的八进制表示法
var octalLiteral = 484;
var notANumber = NaN;
var infinityNumber = Infinity;
// 字符串
var myName = '111\tTom"ass';
var myName1 = "111\thello\"asd";
console.log('myName=', myName, 'myName1=', myName1);
var myAge = 25;
// 模板字符串 其中 ` 用来定义 ES6 中的模板字符串，${expr} 用来在模板字符串中嵌入表达式
var sentence = "Hello, my name is ".concat(myName, ".I'll be ").concat(myAge + 1, " years old next month.");
// 空值 void表示没有任何返回值的函数
function alertName() {
    alert('My name is Tom');
}
// 与 void 的区别是，undefined 和 null 是所有类型的子类型。也就是说 undefined 类型的变量，可以赋值给 number 类型的变量
var u = undefined;
var n = null;
var unusable = undefined;
var myFavoriteNumber = 'seven';
//如果是一个普通类型，在赋值过程中改变类型是不被允许的：
// myFavoriteNumber = 7;
// 但如果是 any 类型，则允许被赋值为任意类型。
var myFavoriteNumber1 = 'seven';
myFavoriteNumber1 = 7;
//变量如果在声明的时候，未指定其类型，那么它会被识别为任意值类型：
var myFavoriteNumber3;
myFavoriteNumber3 = 'seven';
myFavoriteNumber3 = 7;
//联合类型使用 | 分隔每个类型。
// myFavoriteNumber3 = true; 错误
//当 TypeScript 不确定一个联合类型的变量到底是哪个类型的时候，我们只能访问此联合类型的所有类型里共有的属性或方法
function getLength(something) {
    return something.toString().length;
}
var fibonacci = [1, 1, 2, 3, 5];
// 数组的项中不允许出现其他的类型，类似范型
// let fibonacci: number[] = [1, '1', 2, 3, 5];
var fibonacci1 = [1, 1, 2, 3, 5];
var myFavoriteNumber5 = 'seven';
// 不能将整型赋值给字符串类型
// myFavoriteNumber5 = 7;
var myFavoriteNumber6 = 'seven';
myFavoriteNumber6 = 7;
var anyThing = 'hello';
anyThing.setName('Jerry');
console.log(anyThing.myName);
console.log(anyThing.myName.firstName);
