function echo<T>(arg: T): T {
  return arg;
}

function swap<T, U>(tuple: [T, U]): [U, T] {
  return [tuple[1], tuple[0]];
}

// 泛型，使用时，确定类型

function echoWithArray<T>(arg: T[]): T[] {
  console.log(arg.length);
  return arg;
}

const arrs = echoWithArray([1, 2.3, 4, 5]);

interface IWithLength {
  length: number;
}

//约束 泛型  鸭子  参数含有 length属性，这个玉树条件
function echoWithLength<T extends IWithLength>(arg: T): T {
  console.log(arg.length);
  return arg;
}

const str = echoWithLength('str');
const obj = echoWithLength({ length: 11 });

// 队列类
class Queue<T> {
  private data = [];

  push(item: T) {
    return this.data.push(item);
  }

  pop(): T {
    return this.data.pop();
  }
}

const queue = new Queue<number>();
queue.push(100000);
const item = queue.pop();
console.log(item.toFixed());
const nn: number = 2;

const queue2 = new Queue<string>();

//接口泛型
interface KeyPair<T, U> {
  key: T;
  value: U;
}

let arr: Array<string> = ['h', 'H']; //已经定义好的Array 泛型接口

// 泛型接口 描述函数

interface Iplus<T> {
  (a: T, b: T): T;
}
