// interface 即 Duck Type 鸭子类型（对象的推断）
interface Person {
  readonly id: number; // readonly 是用在属性上不能再改变。 const 是用在变量上
  name: string;
  age?: number; //? 为可选属性
}

let youkou: Person = {
  //强制对每个成员进行类型检查
  id: 1,
  name: 'youkou',
  age: 20,
};
