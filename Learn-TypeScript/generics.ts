function echo<T>(arg: T): T {
  return arg;
}

function swap<T, U>(tuple: [T, U]): [U, T] {
  return [tuple[1], tuple[0]];
}

// 泛型，使用时，确定类型

function echoWithArray<T>(arg: T[]): T[] {
  console.log(arg.length);
  return arg;
}

const arrs = echoWithArray([1, 2.3, 4, 5]);

interface IWithLength {
  length: number;
}

//约束 泛型  鸭子  参数含有 length属性，这个约束条件
function echoWithLength<T extends IWithLength>(arg: T): T {
  console.log(arg.length);
  return arg;
}

const str = echoWithLength('str');
const obj = echoWithLength({ length: 11 });

// 队列类
class Queue<T> {
  private data = [];

  push(item: T) {
    return this.data.push(item);
  }

  pop(): T {
    return this.data.pop();
  }
}

const queue = new Queue<number>();
queue.push(100000);
const item = queue.pop();
console.log(item.toFixed());
const nn: number = 2;

const queue2 = new Queue<string>();

//接口泛型
interface KeyPair<T, U> {
  key: T;
  value: U;
}

let arr: Array<string> = ['h', 'H']; //已经定义好的Array 泛型接口

// 泛型接口 描述函数

interface Iplus<T> {
  (a: T, b: T): T;
}

// 箭头函数
const getArray = <T>(value: T, times: number = 5): T[] => {
  return new Array(times).fill(value);
};

getArray<number[]>([2, 3, 4, 5], 6).forEach((item) => {
  console.log(item.length);
});
// 注： 在处理泛型数据的时候，不是所有类型数据都能做的操作或调用的方法，则不能做 如：
const getLength = <T>(param: T): number => {
  // return param.length; // property 'length' does not on type T
};

// 泛型函数类型
// ex1: 简单定义
const getArray2: <T>(arg: T, times: number) => T[] = (arg, times) => {
  return new Array(times).fill(arg);
};

// ex2: 使用类型别名
type GetArray = <T>(arg: T, times: number) => T[];
const getArray3: GetArray = <T>(arg: T, times: number): T[] => {
  return new Array(times).fill(arg);
};

// ex3. by interface
interface GetArray2 {
  <T>(arg: T, times: number): T[];
}
const getArray4: GetArray = <T>(arg: T, times: number): T[] => {
  return new Array(times).fill(arg);
};
// 接口中泛型变量提升到接口最外层，这样接口中所有属性和方法都能使用这个泛型变量了
interface GetArray3<T> {
  (arg: T, times: number): T[];
  // tag: T;
}
const getArray5: GetArray3<number> = <T>(arg: T, times: number): T[] => {
  // error 不能将类型“{ <T>(arg: T, times: number): T[]; tag: string; }”分配给类型“GetArray<number>”。
  // 属性“tag”的类型不兼容。
  return new Array(times).fill(arg);
};
getArray.tag = 'a'; // 不能将类型“"a"”分配给类型“number”
getArray('a', 1); // 不能将类型“"a"”分配给类型“number”
// 使用接口的时候，要在接口名后面明确传入一个类型，也就是这里的GetArray<number>，那么后面的 arg 和 tag 的类型都得是 number 类型
// 希望 T 可以是任何类型，可以把GetArray<number>换成GetArray<any>

// 泛型约束  泛型约束就是使用一个类型和extends对泛型进行约束，
interface ValueWithLength {
  length: number;
}
const getLengthx = <T extends ValueWithLength>(param: T): number => {
  return param.length;
};
getLengthx('abc'); // 3
getLengthx([1, 2, 3]); // 3
getLengthx({ length: 3 }); // 3
getLengthx(123); // error 类型“123”的参数不能赋给类型“ValueWithLength”的参数

//在泛型约束中使用类型参数
