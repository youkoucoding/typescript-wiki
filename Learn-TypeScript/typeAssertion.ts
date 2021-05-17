// 显示类型断言
// (1) 严格模式下null和undefined赋值给其它类型值
// 在 tsconfig.json 中将 strictNullChecks 设为 true 后，就不能再将 undefined 和 null 赋值给除它们自身和void 之外的任意类型值了，
// 使用联合类型来实现 null 或 undefined 赋值给其它类型

let str = 'lison';
str = null; // error 不能将类型“null”分配给类型“string”
let strNull: string | null = 'lison'; // 这里你可以简单理解为，string | null即表示既可以是string类型也可以是null类型
strNull = null; // right
strNull = undefined; // error 不能将类型“undefined”分配给类型“string | null”

// TS 会将 undefined 和 null 区别对待，
// string|undefined、string|null和string|undefined|null是三种不同的类型

// (2) 可选参数和可选属性
// 开启了 strictNullChecks，可选参数会被自动加上|undefined

const sum1 = (x: number, y?: number) => {
  return x + (y || 0);
};
sum1(1, 2); // 3
sum1(1); // 1
sum1(1, undefined); // 1
sum1(1, null); // error Argument of type 'null' is not assignable to parameter of type 'number | undefined'
// 可以根据错误信息看出，这里的参数 y 作为可选参数，它的类型就不仅是 number 类型了，它可以是 undefined，所以它的类型是联合类型number | undefined
// TS 对可选属性和对可选参数的处理一样，可选属性的类型也会被自动加上|undefined
interface PositionInterface {
  x: number;
  b?: number;
}
const position: PositionInterface = {
  x: 12,
};
position.b = 'abc'; // error
position.b = undefined; // right
position.b = null; // error

// ** 显式赋值断言
// 开启 strictNullChecks 时，有些情况下编译器是无法在我们声明一些变量前知道一个值是否是 null 的
// 需要使用类型断言手动指明该值不为 null  例子：
function getSplicedStr(num: number | null): string {
  function getRes(prefix: string) {
    // 这里在函数getSplicedStr里定义一个函数getRes，我们最后调用getSplicedStr返回的值实际是getRes运行后的返回值
    return prefix + num.toFixed().toString(); // 这里使用参数num，num的类型为number或null，在运行前编译器是无法知道在运行时num参数的实际类型的，所以这里会报错，因为num参数可能为null
  }
  num = num || 0.1; // 但是这里进行了赋值，如果num为null则会将0.1赋给num，所以实际调用getRes的时候，getRes里的num拿到的始终不为null
  return getRes('lison');
}
// **********
function getSplicedStrNew(num: number | null): string {
  function getLength(prefix: string) {
    return prefix + num!.toFixed().toString();
  }
  num = num || 0.1;
  return getLength('lison');
}

// num 不为 null，即便 getSplicedStr 函数在调用的时候传进来的参数是null，在 getLength函数中的 num 也不会是 null
