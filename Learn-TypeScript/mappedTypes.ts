// 映射类型

// 通过一个普通的接口创建一个每个属性都只读的接口，会遍历传入对象的每个属性并做处理
interface Info {
  age: number;
}
type ReadonlyType<T> = { readonly [P in keyof T]: T[P] }; // 这里定义了一个ReadonlyType<T>映射类型
type ReadonlyInfo = ReadonlyType<Info>;
let info: ReadonlyInfo = {
  age: 18,
};
info.age = 28; // error Cannot assign to 'age' because it is a constant or a read-only property

// 也可以创建一个每个属性都是可选属性的接口：
interface Info {
  age: number;
}
type ReadonlyType<T> = { readonly [P in keyof T]?: T[P] };
type ReadonlyInfo = ReadonlyType<Info>;
let info: ReadonlyInfo = {};

type Pick<T, K extends keyof T> = { [P in K]: T[P] };
type Record<K extends keyof any, T> = { [P in K]: T };

// Pick
interface Info {
  name: string;
  age: number;
  address: string;
}
const info: Info = {
  name: 'lison',
  age: 18,
  address: 'beijing',
};
function pick<T, K extends keyof T>(obj: T, keys: K[]): Pick<T, K> {
  // 这里我们定义一个pick函数，用来返回一个对象中指定字段的值组成的对象
  let res = {} as Pick<T, K>;
  keys.forEach((key) => {
    res[key] = obj[key];
  });
  return res;
}
const nameAndAddress = pick(info, ['name', 'address']); // { name: 'lison', address: 'beijing' }

// Record 适用于将一个对象中的每一个属性转换为其他值的场景
function mapObject<K extends string | number, T, U>(
  obj: Record<K, T>,
  f: (x: T) => U
): Record<K, U> {
  let res = {} as Record<K, U>;
  for (const key in obj) {
    res[key] = f(obj[key]);
  }
  return res;
}

const names = { 0: 'hello', 1: 'world', 2: 'bye' };
const lengths = mapObject(names, (s) => s.length); // { 0: 5, 1: 5, 2: 3 }

// 同态：两个相同类型的代数结构之间的结构保持映射。

// 由映射类型进行推断   逆向操作-》拆包
type Proxy<T> = {
  // 这里定义一个映射类型，他将一个属性拆分成get/set方法
  get(): T;
  set(value: T): void;
};
type Proxify<T> = { [P in keyof T]: Proxy<T[P]> }; // 这里再定义一个映射类型，将一个对象的所有属性值类型都变为Proxy<T>处理之后的类型
function proxify<T>(obj: T): Proxify<T> {
  // 这里定义一个proxify函数，用来将对象中所有属性的属性值改为一个包含get和set方法的对象
  let result = {} as Proxify<T>;
  for (const key in obj) {
    result[key] = {
      get: () => obj[key],
      set: (value) => (obj[key] = value),
    };
  }
  return result;
}
let props = {
  name: 'lison',
  age: 18,
};
let proxyProps = proxify(props);
console.log(proxyProps.name.get()); // "lison"
proxyProps.name.set('li');

// 增加或移除特定修饰符
//  元组和数组上的映射类型
