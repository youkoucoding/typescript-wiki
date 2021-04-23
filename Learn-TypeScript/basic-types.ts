let isDone: boolean = true;

let age: number = 20;
let binaryNumber: number = 0b1111;

let firstName: string = 'youkou';
let message: string = `Hello, &{firstName}, age is ${age}`;

let u: undefined = undefined; // undefined & null https://www.ruanyifeng.com/blog/2014/03/undefined-vs-null.html
let n: null = null;

let num: number = null; // 不报错，说明，null 和 undefined 是所有类型的子类型。

let notSure: any = 4; // any
notSure = undefined;
notSure = 'name';
notSure = true;

let numberOrString: number | string = 23; //联合类型
numberOrString = 'hello';

// array
let arrOfNumbers: number[] = [1, 2, 3, 4];
arrOfNumbers.push(5);

function test() {
  console.log(arguments);
  arguments.length;
  // arguments.forEach()  错误
}

// 元组 turple type
let user: [string, number] = ['hello', 123];
