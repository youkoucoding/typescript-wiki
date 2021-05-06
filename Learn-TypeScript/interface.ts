// interface 即 Duck Type 鸭子类型（对象的推断） {} 包含的是一个代码块 是声明类型，冒号指定类型 每条声明之前用换行分隔即可，或者也可以使用分号或者逗号，都是可以的。
interface Person {
  readonly id: number; // readonly 是用在属性上不能再改变。如果是定义一个常量，那用const，如果这个值是作为对象的属性，那请用readonly
  name: string;
  age?: number; // ? 为可选属性
}

let youkou: Person = {
  //强制对每个成员进行类型检查
  id: 1,
  name: 'youkou',
  age: 20,
};

// 绕过 多余属性检查
// （1）如果使用接口和定义接口的数据类型不同时，可以使用类型断言解决
// （2） 更好的方式是添加字符串索引签名 如下
interface Vegetables {
  color: string;
  type: string;
  [prop: string]: any;
}
const getVegetables = ({ color, type }: Vegetables) => {
  return `A ${color ? color + ' ' : ''}${type}`;
};
getVegetables({
  color: 'red',
  type: 'tomato',
  size: 12,
  price: 1.2,
});
// (3) 利用类型兼容性 （编译器类型检查的方式）
interface Vegetables3 {
  type: string;
}
const getVegetables3 = ({ type }: Vegetables3) => {
  return `A ${type}`;
};

const option = { type: 'tomato', size: 12 };
getVegetables3(option);

// 函数类型接口
interface AddFunc {
  (num1: number, num2: number): number; // 调用签名
}
const add: AddFunc = (n1, n2) => n1 + n2; // 完成接口的时候，参数名字无需相同， 位置和类型匹配即可
// const join: AddFunc = (n1, n2) => `${n1} ${n2}`; // Type string is not assignable to type number

// 注： 接口的校验是严格的，在定义一个实现某个接口的值的时候，对于接口中没有定义的字段是不允许出现的，我们称这个为多余属性检查

// 索引类型
interface RoleDic {
  [id: number]: string; // 同时给索引和值都设置类型
}
// 这里有的点需要注意，你可以设置索引类型为 number。但是这样如果你将属性名设置为字符串类型，则会报错；但是如果你设置索引类型为字符串类型，那么即便你的属性名设置的是数值类型，也没问题。
// 因为 JS 在访问属性值的时候，如果属性名是数值类型，会先将数值类型转为字符串，然后再去访问

const role3: RoleDic = ['super_admin', 'admin']; // 数组

// 接口可以继承
// 一个接口可以被多个接口继承，同样，一个接口也可以继承多个接口，多个接口用逗号隔开。

//混合类型接口
interface Counter {
  (): void; // 这里定义Counter这个结构必须包含一个函数，函数的要求是无参数，返回值为void，即无返回值
  count: number; // 而且这个结构还必须包含一个名为count、值的类型为number类型的属性
}
const getCounter = (): Counter => {
  //getCounter函数返回值类型为Counter，它是一个函数，无返回值，即返回值类型为void，它还包含一个属性count，属性返回值类型为number。
  // 这里定义一个函数用来返回这个计数器
  const c = () => {
    // 此函数 无返回值
    // 定义一个函数，逻辑和前面例子的一样
    c.count++;
  };
  c.count = 0; // 再给这个函数添加一个count属性初始值为0
  return c; // 最后返回这个函数对象
};
const counter: Counter = getCounter(); // 通过getCounter函数得到这个计数器
counter();
console.log(counter.count); // 1
counter();
console.log(counter.count); // 2
