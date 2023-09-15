

function createArray(length: number, value: any): Array<any> {
  let result:any = [];
  for (let i = 0; i < length; i++) {
      result[i] = value;
  }
  return result;
}

createArray(3, 'x'); // ['x', 'x', 'x']



function createArray2<T>(length: number, value: T): Array<T> {
  let result: T[] = [];
  for (let i = 0; i < length; i++) {
      result[i] = value;
  }
  return result;
}

createArray2<string>(3, 'x'); // ['x', 'x', 'x']


//多个类型参数
function swap<T, U>(tuple: [T, U]): [U, T] {
  return [tuple[1], tuple[0]];
}

swap([7, 'seven']); // ['seven', 7]



//泛型接口
interface CreateArrayFunc {
  <T>(length: number, value: T): Array<T>;
}

let createArray3: CreateArrayFunc;
createArray3 = function<T>(length: number, value: T): Array<T> {
  let result: T[] = [];
  for (let i = 0; i < length; i++) {
      result[i] = value;
  }
  return result;
}

createArray(3, 'x'); // ['x', 'x', 'x']
