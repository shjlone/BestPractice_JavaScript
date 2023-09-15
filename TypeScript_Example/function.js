"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//函数生命
function sum(x, y) {
    return x + y;
}
//函数表达式
var mySum = function (x, y) {
    return x + y;
};
var mySearch;
mySearch = function (source, subString) {
    return source.search(subString) !== -1;
};
console.log(mySearch('111', '2'));
//可选参数 可选参数必须接在必需参数后面
function buildName(firstName, lastName) {
    if (lastName) {
        return firstName + ' ' + lastName;
    }
    else {
        return firstName;
    }
}
var tomcat = buildName('Tom', 'Cat');
var tom1 = buildName('Tom');
console.log(tomcat, tom1);
//参数默认值
function buildName1(firstName, lastName) {
    if (lastName === void 0) { lastName = 'Cat'; }
    return firstName + ' ' + lastName;
}
var tomcat1 = buildName1('Tom', 'Cat');
var tom2 = buildName1('Tom');
//剩余参数
function push(array) {
    var items = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        items[_i - 1] = arguments[_i];
    }
    items.forEach(function (item) {
        array.push(item);
    });
}
var a = [];
push(a, 1, 2, 3);
console.log(a);
function reverse(x) {
    if (typeof x === 'number') {
        return Number(x.toString().split('').reverse().join(''));
    }
    else if (typeof x === 'string') {
        return x.split('').reverse().join('');
    }
}
function sayHello2022(name) {
    return "Hello from ".concat(name);
}
exports.default = sayHello2022;
