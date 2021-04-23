[undefined 与 null 的区别 - 阮一峰的网络日志](https://www.ruanyifeng.com/blog/2014/03/undefined-vs-null.html)

##### null 目前的用法: 表示"没有对象"，即该处不应该有值

1. 作为函数的参数，表示该函数的参数不是对象。

2. 作为对象原型链的终点。 `Object.getPrototypeOf(Object.prototype) //null`

##### undefined 目前用法: 表示缺省，此处应该有一个值， 但是还未定义

1. 变量被声明了，但没有赋值时，就等于 undefined。

2. 调用函数时，应该提供的参数没有提供，该参数等于 undefined。

3. 对象没有赋值的属性，该属性的值为 undefined。

4. 函数没有返回值时，默认返回 undefined。
