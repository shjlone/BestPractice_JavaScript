





let fibonacci: number[] = [1, 1, 2, 3, 5];
fibonacci.push(8);

console.log(fibonacci);

// 数组的项中不允许出现其他的类型，类似范型
// let fibonacci: number[] = [1, '1', 2, 3, 5];


// 数组泛型
let fibonacci1: Array<number> = [1, 1, 2, 3, 5];

console.log(fibonacci1);


// 用接口表示数组
interface NumberArray {
  [index: number]: number;
}

let fibonacci2: NumberArray = [1, 1, 2, 3, 5];

// 类数组
function sum() {
  let args: {
    [index: number]: number;
    length: number;
    callee: Function;
  } = arguments;
}


