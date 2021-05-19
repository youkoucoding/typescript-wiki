// 可辨识的联合类型
// 把单例类型、联合类型、类型保护和类型别名这几种类型进行合并，来创建一个叫做可辨识联合的高级类型
// 把几个类型封装为联合类型，并起一个别名  例如

interface Square {
  kind: 'square'; // 这个就是具有辨识性的属性
  size: number;
}
interface Rectangle {
  kind: 'rectangle'; // 这个就是具有辨识性的属性
  height: number;
  width: number;
}
interface Circle {
  kind: 'circle'; // 这个就是具有辨识性的属性
  radius: number;
}
type Shape = Square | Rectangle | Circle; // 这里使用三个接口组成一个联合类型，并赋给一个别名Shape，组成了一个可辨识联合。
function getArea(s: Shape) {
  switch (s.kind) {
    case 'square':
      return s.size * s.size;
    case 'rectangle':
      return s.height * s.width;
    case 'circle':
      return Math.PI * s.radius ** 2; // 幂运算
  }
}

// 两种完整性检查的方法：
// 1 利用 strictNullChecks

interface Square {
  kind: 'square';
  size: number;
}
interface Rectangle {
  kind: 'rectangle';
  height: number;
  width: number;
}
interface Circle {
  kind: 'circle';
  radius: number;
}
interface Triangle {
  kind: 'triangle';
  bottom: number;
  height: number;
}
type Shape = Square | Rectangle | Circle | Triangle; // 这里我们在联合类型中新增了一个接口，但是下面的case却没有处理Triangle的情况
function getArea(s: Shape) {
  switch (s.kind) {
    case 'square':
      return s.size * s.size;
    case 'rectangle':
      return s.height * s.width;
    case 'circle':
      return Math.PI * s.radius ** 2;
  }
}
//开启 strictNullChecks，然后让函数的返回值类型为 number，那么当返回 undefined 的时候，就会报错：
function getArea(s: Shape): number {
  // error Function lacks ending return statement and return type does not include 'undefined'
  switch (s.kind) {
    case 'square':
      return s.size * s.size;
    case 'rectangle':
      return s.height * s.width;
    case 'circle':
      return Math.PI * s.radius ** 2;
  }
}

// 2 使用 never 类型
// 当函数返回一个错误或者不可能有返回值的时候，返回值类型为 never
function assertNever(value: never): never {
  throw new Error('Unexpected object: ' + value);
}
function getArea(s: Shape) {
  switch (s.kind) {
    case 'square':
      return s.size * s.size;
    case 'rectangle':
      return s.height * s.width;
    case 'circle':
      return Math.PI * s.radius ** 2;
    default:
      return assertNever(s); // error 类型“Triangle”的参数不能赋给类型“never”的参数
  }
}
