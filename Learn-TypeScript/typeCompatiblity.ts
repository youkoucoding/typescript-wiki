// 类型兼容

// 1. 函数兼容性
//    函数参数个数：参数个数少的函数，可以赋值给 参数多的函数，要，赋值函数的参数，在被赋值的函数参数中，可以找到一一对应
//    函数参数类型：除了参数个数，参数类型需要对应：（如果函数 z 想要赋值给 x，要求 y 的返回值类型必须是 x 的返回值类型的子类型，）
//    剩余参数和可选参数： 当要被赋值的函数参数中包含剩余参数（…args）时，赋值的函数可以用任意个数参数代替，但是类型需要对应。

// 剩余参数和可选参数
const getNum = (
  // 这里定义一个getNum函数，他有两个参数
  arr: number[], // 第一个参数是一个数组
  callback: (...args: number[]) => number // 第二个参数是一个函数，这个函数的类型要求可以传入任意多个参数，但是类型必须是数值类型，返回值必须是数值类型
): number => {
  return callback(...arr); // 这个getNum函数直接返回调用传入的第二个参数这个函数，以第一个参数这个数组作为参数的函数返回值
};
getNum(
  [1, 2],
  (...args: number[]): number => args.length // 这里传入一个函数，逻辑是返回参数的个数
);

// (4) 函数参数双向协变:  函数参数双向协变即参数类型无需绝对相同，

// (5) 函数返回值类型

let x = (a: number): string | number => 0;
let y = (b: number) => 'a';
let z = (c: number) => false;
x = y;
x = z; // 不能将类型“(c: number) => boolean”分配给类型“(a: number) => string | number”

// (6) 函数重载
// 带有重载的函数，要求被赋值的函数的每个重载都能在用来赋值的函数上找到对应的签名
function merge(arg1: number, arg2: number): number; // 这是merge函数重载的一部分
function merge(arg1: string, arg2: string): string; // 这也是merge函数重载的一部分
function merge(arg1: any, arg2: any) {
  // 这是merge函数实体
  return arg1 + arg2;
}
function sum(arg1: number, arg2: number): number; // 这是sum函数重载的一部分
function sum(arg1: any, arg2: any): any {
  // 这是sum函数实体
  return arg1 + arg2;
}
let func = merge;
func = sum; // error 不能将类型“(arg1: number, arg2: number) => number”分配给类型“{ (arg1: number, arg2: number): number; (arg1: string, arg2: string): string; }”

// 枚举 compatibility
// 数字枚举成员类型与数字类型互相兼容：

enum Status {
  On,
  Off,
}
let s = Status.On;
s = 1;
s = 3;
// 不同枚举值之间是不兼容的
enum Status2 {
  On,
  Off,
}
enum Color {
  White,
  Black,
}
let s1 = Status2.On;
s1 = Color.White; // error Type 'Color.White' is not assignable to type 'Status'

// 字符串枚举成员类型和字符串类型是不兼容的，来看例子：

enum Status3 {
  On = 'on',
  Off = 'off',
}
let s2 = Status3.On;
s2 = 'Lison'; // error 不能将类型“"Lison"”分配给类型“Status”

// 类のcompatibility
// 比较两个类类型的值的兼容性时，只比较实例的成员，类的静态成员和构造函数不进行比较

// 泛型   : 使用时指定的特定类型只会影响使用了类型参数的部分!
interface Data<T> {} // 接口中并没有用到 类型T
let data1: Data<number>;
let data2: Data<string>;

data1 = data2; // ok

interface Data2<T> {
  data: T;
}
let data3: Data2<number>;
let data4: Data2<string>;

data3 = data4; // error 不能将类型“Data<string>”分配给类型“Data<number>”。不能将类型“string”分配给类型“number”
