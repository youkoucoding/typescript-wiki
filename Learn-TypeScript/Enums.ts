// 常量です  对应数字递增  还可以定义为 字符串   Up = 'Up'...
// 逗号隔开字段
// 也可以指定任意字段索引值
enum Direction {
  Up,
  Down,
  Left,
  Right = 200,
}

// 数字枚举在定义值的时候，可以使用计算值和常量。但是要注意，
// 如果某个字段使用了计算值或常量，那么该字段后面紧接着的字段必须设置初始值，这里不能使用默认的递增值了
// 字符串枚举，字符串枚举值要求每个字段的值都必须是字符串字面量 或者是该枚举值中另一个字符串枚举成员，(同一个枚举值中的枚举成员)
// 字符串枚举不能使用常量或者计算值，也不能使用其他枚举值中的成员

console.log(Direction.Up); // 0
console.log(Direction.Down); // 1
console.log(Direction.Left); //2
console.log(Direction['Left']); // 此用法，要加引号
console.log(Direction.Right); //3

console.log(Direction[3]); // Right 可反向取得对应字符串

//常量枚举  常量枚举 可以提升性能, 加了const  代码不会创建这个对象
const enum Weekday {}

// 异构枚举
// 枚举值中成员值既有数字类型又有字符串类型,不建议使用
enum Result {
  Failed = 404,
  Success = 'Success',
}

// 如果枚举值里所有成员的值都是字面量类型的值，那么这个枚举的每个成员和枚举值本身都可以作为类型来使用，如下
// 不带初始值的枚举成员
enum E {
  A,
}
// 值为字符串字面量
enum E1 {
  A = 'a',
}
// 值为数值字面量，或者带有-符号的数值字面量
enum E2 {
  A = 1,
}

enum E3 {
  A = -1,
}
//上面这三种情况的时候，枚举值和成员就可以作为类型来用

// (1) 枚举成员类型
enum Animal {
  Dog = 1,
  cat = 23,
}
interface Dog {
  type: Animal.Dog; //使用Animal.Dog作为类型，指定接口Dog的必须有一个type字段，且类型为Animal.Dog
}

let dog: Dog = {
  type: Animal.Dog,
};

// (2) 联合枚举类型  相当于status: Status.Off | Status.On
enum Status {
  Off,
  On,
}
interface Light {
  status: Status;
}
// enum Animal {
//   Dog = 1,
//   Cat = 2,
// }
// const light1: Light = {
// status: Animal.Dog, // error 不能将类型“Animal.Dog”分配给类型“Status”
// };
const light2: Light = {
  status: Status.Off,
};
const light3: Light = {
  status: Status.On,
};

// 注： Status[Status[“Off”] = 0] = "Off"相当于Status[0] = “Off”。
