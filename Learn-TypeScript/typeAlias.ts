// 类型别名
type PlusType = (x: number, y: number) => number;

function sum(x: number, y: number): number {
  return x + y;
}

const sum2: PlusType = sum;

// 联合类型中常用
type NameResolver = () => string;
type NameOrResolver = string | NameResolver;
function getName(n: NameOrResolver): string {
  if (typeof n === 'string') {
    return n;
  } else {
    return n();
  }
}

//type assertion 类型断言
function getLength(input: number | string): number {
  const str = input as String; // 此处大写的 String 接口   需断言成为联合类型中的某一个类型！！！
  if (str.length) {
    return str.length;
  } else {
    return input.toString().length;
  }
}

// if ((<string>input).length) {

// } else {

// }  简单写法

// 声明文件  例如  declare var jQuery:(selector:string)=>any;  .d.ts 文件为后缀

// 类型别名
// 类型别名就是给一种类型起个别的名字，之后只要使用这个类型的地方，都可以用这个名字作为类型代替，但是它只是起了一个名字，并不是创建了一个新类型。

type TypeString = string;
let str: TypeString;
str = 123; // error Type '123' is not assignable to type 'string'

//类型别名也可以使用泛型
type PositionType<T> = { x: T; y: T };
const position1: PositionType<number> = {
  x: 1,
  y: -1,
};
const position2: PositionType<string> = {
  x: 'right',
  y: 'top',
};

// 使用类型别名时也可以在属性中引用自己
type Child<T> = {
  current: T;
  child?: Child<T>;
};
let ccc: Child<string> = {
  current: 'first',
  child: {
    // error
    current: 'second',
    child: {
      current: 'third',
      child: 'test', // 这个地方不符合type，造成最外层child处报错
    },
  },
};
// 注意： 只可以在对象属性中引用类型别名自己，不能直接使用
type Child = Child[]; // error 类型别名“Child”循环引用自身
// 且 不能使用 extends 和 implements

// 接口和类型别名有时可以起到同样作用

type Alias = {
  num: number;
};
interface Interface {
  num: number;
}
let _alias: Alias = {
  num: 123,
};
let _interface: Interface = {
  num: 321,
};
_alias = _interface;
// 当你定义的类型要用于拓展，即使用 implements 等修饰符时，用接口。
// 当无法通过接口，并且需要使用联合类型或元组类型，用类型别名。

// 2. 字面量类型
// (1) 字符串字面量类型
//    字符串字面量类型其实就是字符串常量，与字符串类型不同的是它是具体的值

type Name = 'Lison';
const name1: Name = 'test'; // error 不能将类型“"test"”分配给类型“"Lison"”
const name2: Name = 'Lison';
// 还可以使用联合类型来使用多个字符串
type Direction = 'north' | 'east' | 'south' | 'west';
function getDirectionFirstLetter(direction: Direction) {
  return direction.substr(0, 1);
}
getDirectionFirstLetter('test'); // error 类型“"test"”的参数不能赋给类型“Direction”的参数
getDirectionFirstLetter('east');

// (2) 数字字面量类型
// 它和字符串字面量类型差不多，都是指定类型为具体的值

type Age = 18;
interface Info {
  name: string;
  age: Age;
}
const info: Info = {
  name: 'Lison',
  age: 28, // error 不能将类型“28”分配给类型“18”
};

// 逻辑错误，例：
function getValue(index: number) {
  if (index !== 0 || index !== 1) {
    // error This condition will always return 'true' since the types '0' and '1' have no overlap
    // ...
  }
}
