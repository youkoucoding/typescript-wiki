// 类型别名
type PlusType = (x: number, y: number) => number;

function sum(x: number, y: number): number {
  return x + y;
}

const sum2: PlusType = sum;

// 联合类型中常用
type NameResolver = () => string;
type NameOrResolver = string | NameResolver;
function getName(n: NameOrResolver): string {
  if (typeof n === 'string') {
    return n;
  } else {
    return n();
  }
}

//type assertion 类型断言
function getLength(input: number | string): number {
  const str = input as String; // 此处大写的 String 接口   需断言成为联合类型中的某一个类型！！！
  if (str.length) {
    return str.length;
  } else {
    return input.toString().length;
  }
}

// if ((<string>input).length) {

// } else {

// }  简单写法

// 声明文件  例如  declare var jQuery:(selector:string)=>any;  .d.ts 文件为后缀
