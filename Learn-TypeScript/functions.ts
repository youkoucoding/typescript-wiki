//函数声明
function add1(x: number, y: number, z?: number): number {
  // 可选参数放在最后
  if (typeof z === 'number') {
    return x + y + z;
  }
  return x + y;
}

let result = add1(1, 2, 5);

// 函数表达式
const add2 = function (x: number, y: number, z: number = 10): number {
  if (typeof z === 'number') {
    return x + y + z;
  }
  return x + y;
};

const add3: (x: number, y: number, z: number) => number = add2;
