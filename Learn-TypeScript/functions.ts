//函数声明
function add1(x: number, y: number, z?: number): number {
  // 参数和返回值类型，参数类型默认为 any ，返回值类型为void或者可推断
  // 可选参数放在最后
  if (typeof z === 'number') {
    return x + y + z;
  }
  return x + y;
}

let result = add1(1, 2, 5);

// 函数表达式
const add2 = function (x: number, y: number, z: number = 10): number {
  if (typeof z === 'number') {
    return x + y + z;
  }
  return x + y;
};

const add3: (x: number, y: number, z: number) => number = add2;

// 方法二
let sum: (x: number, y: number) => number;
sum = (arg1: number, arg2: number): number => arg1 + arg2;
// sum = (arg1: string, arg2: string): string => arg1 + arg2; // error

// 方法三  使用接口定义函数类型
// interface Add {
//   (x: number, y: number): number;
// }
// let add: Add = (arg1: string, arg2: string): string => arg1 + arg2;

// 方法四 使用类型别名
type Plus = (x: number, y: number) => number;
let plus: Plus = (arg1: string, arg2: string): string => arg1 + arg2; // error 不能将类型“(arg1: string, arg2: string) => string”分配给类型“Add”
// type关键字可以为原始值、联合类型、元组以及任何我们定义的类型起一个别名

// 可选参数
// 接口形式定义的函数类型必选参数和可选参数的位置前后是无所谓的，但是以下的定义形式，可选参数必须放在必选参数后面，这和在 JS 中定义函数是一致的
// type Add = (x?: number, y: number) => number; // error 必选参数不能位于可选参数后。

// (3) 剩余参数
// 在 JS 中，如果我们定义一个函数，这个函数可以输入任意个数的参数，那么我们就无法在定义参数列表的时候挨个定义。在 ES6 发布之前，我们需要用到 arguments 来获取参数列表。arguments 是每一个函数都包含的一个类数组对象，它包含在函数调用时传入函数的所有实际参数（简称实参），它还包含一个 length 属性，记录参数个数。来看下面的例子，我们来模拟实现函数的重载：

// // javascript
// function handleData() {
//   if (arguments.length === 1) return arguments[0] * 2;
//   else if (arguments.length === 2) return arguments[0] * arguments[1];
//   else return Array.prototype.slice.apply(arguments).join("_");
// }
// handleData(2); // 4
// handleData(2, 3); // 6
// handleData(1, 2, 3, 4, 5); // '1_2_3_4_5'
// // 这段代码如果在TypeScript环境中，三个对handleData函数的调用都会报错，因为handleData函数定义的时候没有参数。
// "…"运算符可以拆解数组和对象

const handleDatax = (arg1: number, ...args: number[]) => {
  // args 是一个数组
  //
};
// handleData(1, "a"); // error 类型"string"的参数不能赋给类型"number"的参数

// Typescript 函数重载  通过为一个函数指定多个函数类型定义，从而对函数调用的返回值进行检查。
function handleData(x: string): string[]; // 这个是重载的一部分，指定当参数类型为string时，返回值为string类型的元素构成的数组
function handleData(x: number): string; // 这个也是重载的一部分，指定当参数类型为number时，返回值类型为string
function handleData(x: any): any {
  // 这个就是重载的内容了，他是实体函数，不算做重载的部分
  if (typeof x === 'string') {
    return x.split('');
  } else {
    return x.toString().split('').join('_');
  }
}
handleData('abc').join('_');
// handleData(123).join("_"); // error 类型"string"上不存在属性"join"
// handleData(false); // error 类型"boolean"的参数不能赋给类型"number"的参数。
// 这里重载只能用 function 来定义，不能使用接口、类型别名等
