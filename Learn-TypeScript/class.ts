class Animal {
  name: string;
  static categories: string[] = ['hello', 'world'];
  constructor(name: string) {
    this.name = name;
  }

  run() {
    return `${this.name} is running`;
  }
}

const rabbit: Animal = new Animal('linda');
console.log(rabbit.run());

class Dog extends Animal {
  bark() {
    return `${this.name} is barking`;
  }
}

const tidy: Dog = new Dog('tidy');
console.log(tidy.run());
console.log(tidy.bark());

//方法重写
class Cat extends Animal {
  constructor(name) {
    super(name); // 子类必须调用父类的构造方法
  }
}
// 访问修饰符 默认 public 所有地方可访问
// private 只能类内部访问，子类不可访问
// protected 子类可访问
// readonly 只读，不能重新赋值
// static 静态属性，方法，直接访问 无需实例化
console.log(Animal.categories);
