
var listeners = []
function listen() {}
var events_old = {
  listeners: listeners,
  listen: listen
}
// ES6中对象字面量语法
var events = { listeners, listen }


//箭头函数
var example = (parameters) => {
  // function body
}


//只有一个参数，可以省略括号
var double = value => {
  return value * 2
}

//单行表达式
var double = (value) => value * 2


var double = value => value * 2




function puzzle_old() {
  return function () {
    console.log(arguments)
  }
}
puzzle_old('a', 'b', 'c')(1, 2, 3)

//在箭头函数的函数体内使用的this,arguments,super等都指向包含箭头函数的上下文，箭头函数本身不产生新的上下文
function puzzle() {
  return ()=>{
    console.log(arguments)
  }
}
puzzle('a', 'b', 'c')(1, 2, 3)




var coordinates = [12, -7]
var [x, y] = coordinates
console.log('x', x)

var names = ['James', 'L.', 'Howlett']
var [ firstName, , lastName ] = names
console.log('lastName', lastName)

var left = 5, right = 7;
[left, right] = [right, left]


function carFactory({
  brand = 'Volkswagen',
  make = 1999
} = {}) {
  console.log('brand', brand)
  console.log('make', make)
}
carFactory()


//解构
function getCoordinates() {
  return { x: 10, y: 22, z: -1, type: '3d' }
}
var { x, y } = getCoordinates()
console.log(x, y)