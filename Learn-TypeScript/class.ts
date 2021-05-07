class Animal {
  name: string; // 通过参数属性来简化这一步，参数属性简单来说就是在 constructor 构造函数的参数前面加上访问限定符，也就是前面讲的 public、private、protected 和 readonly 中的任意一个
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
// static 静态属性，方法，直接访问 无需实例化 实例将不会添加这个静态属性，也不会继承这个静态方法 如下：
// public static age: number = 18;
// public static getAge() {}
console.log(Animal.categories);
// abstract abstract关键字不仅可以标记类和类里面的方法，还可以标记类中定义的属性和存取器，抽象类一般用来被其他类继承，而不直接用它创建实例

// 实例类型
// 当我们定义一个类，并创建实例后，这个实例的类型就是创建他的类：
class People {
  constructor(public name: string) {}
}
let p: People = new People('lison');

// 类的 类型接口
interface FoodInterface {
  type: string;
}
class FoodClass implements FoodInterface {
  // error Property 'type' is missing in type 'FoodClass' but required in type 'FoodInterface'
  static type: string; // static 没有实现接口，静态属性 type，但静态属性不会添加到实例上，所以还是报错
  constructor() {}
}
// 改为：
class FoodClass2 implements FoodInterface {
  constructor(public type: string) {}
}
// 抽象类实现
abstract class FoodAbstractClass {
  abstract type: string;
}
class Food extends FoodAbstractClass {
  constructor(public type: string) {
    super();
  }
}

// 接口继承类
// 接口可以继承自一个类，当接口继承了该类后，会继承类的成员，但是不包括其实现，也就是只继承成员以及成员类型
// 接口还会继承类的private和protected修饰的成员，
// 当接口继承的这个类中包含这两个修饰符修饰的成员时，这个接口只可被这个类或他的子类实现。
class A {
  protected name: string;
}
interface I extends A {}
class B implements I {} // error Property 'name' is missing in type 'B' but required in type 'I'
class C implements I {
  // error 属性“name”受保护，但类型“C”并不是从“A”派生的类
  name: string;
}
class D extends A implements I {
  getName() {
    return this.name;
  }
}

//  泛型中，使用类的类型
const create = <T>(c: { new (): T }): T => {
  //函数的参数是一个类
  return new c(); //返回的是一个类创建的实例
};
class Info {
  age: number;
}
create(Info).age; //调用 create 函数，传入的和返回的值都应该是同一个类类型
create(Info).name; // error 类型“Info”上不存在属性“name”

//类既是值，也是类型
