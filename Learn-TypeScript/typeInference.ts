// 类型推断

// 一，多类型联合

// 当我们定义一个数组或元组这种包含多个元素的值的时候，
// 多个元素可以有不同的类型，这种时候
// TypeScript 会将多个类型合并起来，组成一个联合类型l
let arr = [123, 'hello'];
arr = ['b', 2, false]; // error 不能将类型“false”分配给类型“string | number”

// example 2
let value = Math.random() * 10 > 5 ? 'abc' : 123;
value = false; // error 不能将类型“false”分配给类型“string | number”

// 二，上下文类型
// 根据左侧的类型推断右侧的一些类型
window.onmousedown = function (mouseEvent) {
  console.log(mouseEvent.a); // error 类型“MouseEvent”上不存在属性“a”
};
