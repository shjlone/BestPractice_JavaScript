
// 接口类型
interface Person {
  name: string;
  age?: number; //?表示可选属性
  readonly id: number; //只读属性
  [propName: string]: any; //任意属性
}

// 定义的变量的属性要跟接口对应
let tom: Person = {
  id: 89757,
  name: 'Tom',
  age: 25,
  gender: 'male'
};

