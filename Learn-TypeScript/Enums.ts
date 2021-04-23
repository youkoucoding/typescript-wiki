// 常量です  对应数字递增  还可以定义为 字符串   Up = 'Up'...
enum Direction {
  Up,
  Down,
  Left,
  Right,
}

console.log(Direction.Up); // 0
console.log(Direction.Down); // 1
console.log(Direction.Left); //2
console.log(Direction.Right); //3

console.log(Direction[3]); // Right 可反向取得对应字符串

//常量枚举  常量枚举 可以提升性能
const enum Weekday {}
