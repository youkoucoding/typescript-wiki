const valueList = [123, 'abc'];
const getRandomValue = () => {
  const number = Math.random() * 10; // 这里取一个[0, 10)范围内的随机值
  if (number < 5) return valueList[0];
  // 如果随机数小于5则返回valueList里的第一个值，也就是123
  else return valueList[1]; // 否则返回"abc"
};
const item = getRandomValue();
if (item.length) {
  // error 类型“number”上不存在属性“length”
  console.log(item.length); // error 类型“number”上不存在属性“length”
} else {
  console.log(item.toFixed()); // error 类型“string”上不存在属性“toFixed”
}

// 类型断言写法
if ((<string>item).length) {
  console.log((<string>item).length);
} else {
  console.log((<number>item).toFixed());
}

// .1 自定义类型保护

// 结构为 value is type  value 名必须和参数名一致

const valueList2 = [123, 'abc'];
const getRandomValue2 = () => {
  const number = Math.random() * 10; // 这里取一个[0, 10)范围内的随机值
  if (number < 5) return valueList[0];
  // 如果随机数小于5则返回valueList里的第一个值，也就是123
  else return valueList[1]; // 否则返回"abc"
};
function isString(value: number | string): value is string {
  //  value 名必须和参数名一致
  const number = Math.random() * 10;
  return number < 5;
}
const item2 = getRandomValue();
if (isString(item)) {
  console.log(item.length); // 此时item是string类型
} else {
  console.log(item.toFixed()); // 此时item是number类型
}

// 2 typeof 类型保护
// TS 中，如果是基本类型，而不是复杂的类型判断，你可以直接使用 typeof 来做类型保护：
if (typeof item === 'string') {
  console.log(item.length);
} else {
  console.log(item.toFixed());
}

// 对 typeof 的处理还有些特殊要求：
// 只能使用=和!两种形式来比较,     (typeof item).includes(‘string’)也能做判断，但是不行
// type 只能是number、string、boolean和symbol四种类型  :
// 在 JS 中，typeof xxx的结果还有object、function和 undefined 。但是在 TS 中，只会把对前面四种类型的 typeof 比较识别为类型保护，
// 可以使用typeof {} === ‘object’，但是这里它只是一条普通的 js 语句，不具有类型保护具有的效果。 例如

const valueList3 = [{}, () => {}];
const getRandomValue3 = () => {
  const number = Math.random() * 10;
  if (number < 5) {
    return valueList[0];
  } else {
    return valueList[1];
  }
};
const res = getRandomValue();
if (typeof res === 'object') {
  console.log(res.toString());
} else {
  console.log(res()); // error 无法调用类型缺少调用签名的表达式。类型“{}”没有兼容的调用签名
}

// 3 instanceof 类型保护
// instanceof操作符是 JS 中的原生操作符，它用来判断一个实例是不是某个构造函数创建的，或者是不是使用 ES6 语法的某个类创建的。
// 在 TS 中，使用 instanceof 操作符同样会具有类型保护效果，

class CreateByClass1 {
  public age = 18;
  constructor() {}
}
class CreateByClass2 {
  public name = 'lison';
  constructor() {}
}
function getRandomItem() {
  return Math.random() < 0.5 ? new CreateByClass1() : new CreateByClass2(); // 如果随机数小于0.5就返回CreateByClass1的实例，否则返回CreateByClass2的实例
}
const item4 = getRandomItem();
if (item4 instanceof CreateByClass1) {
  // 这里判断item是否是CreateByClass1的实例
  console.log(item4.age);
} else {
  console.log(item4.name);
}

// 使用类型保护可以更好地指定某个值的类型，可以把这个指定理解为一种强制转换，这样编译器就能知道我们这个值是我们指定的类型，从而符合我们的预期
