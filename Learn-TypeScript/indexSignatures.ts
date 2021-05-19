//
// 1 索引类型查询操作符
// keyof操作符，连接一个类型，会返回一个由这个类型的所有属性名组成的联合类型。
interface Info {
  name: string;
  age: number;
}
let infoProp: keyof Info;
infoProp = 'name';
infoProp = 'age';
infoProp = 'no'; // error 不能将类型“"no"”分配给类型“"name" | "age"”
// 通过和泛型结合使用，TS 就可以检查使用了动态属性
function getValue<T, K extends keyof T>(obj: T, names: K[]): T[K][] {
  // 这里使用泛型，并且约束泛型变量K的类型是"keyof T"，也就是类型T的所有字段名组成的联合类型
  return names.map((n) => obj[n]); // 指定getValue的返回值类型为T[K][]，即类型为T的值的属性值组成的数组
}
const info = {
  name: 'lison',
  age: 18,
};
let values: string[] = getValue(info, ['name']);
values = getValue(info, ['age']); // error 不能将类型“number[]”分配给类型“string[]”

// 2 索引访问操作符
// 索引访问操作符也就是[], 在 TS 中它可以用来访问某个属性的类型：
interface Info {
  name: string;
  age: number;
}
type NameType = Info['name'];
let name: NameType = 123; // error 不能将类型“123”分配给类型“string”

// 通过keyof能够获取一个类型的所有属性名组成的联合类型，通过[]可以获取某个类型定义中指定字段值的类型。
// 当tsconfig.json里strictNullChecks设为false时，可以通过[keyof Type]获取一个类型定义的所有除去never & undefined & null的字段值的类型组成的联合类型。
