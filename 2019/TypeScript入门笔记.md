## 一、安装

```
npm install typescript --global

tsc -v
// Version 3.7.3
```

尝试第一次编译，编写以下代码并存储为 greeter.ts
```
function greeter(person: string) {
    return "Hello, " + person;
}

let user = "Jane User";

document.body.textContent = greeter(user);
```

执行编译会得到 gretter.js 文件
```
tsc greeter.ts
```

## 二、手册

### 基础类型

布尔值
```js
let isDone: boolean = false;
```

数字
```js
let decLiteral: number = 6; // 十进制
let hexLiteral: number = 0xf00d; // 十六进制
let binaryLiteral: number = 0b1010; // 二进制
let octalLiteral: number = 0o744; // 八进制
```

字符串
```js
let name: string = "bob";
name = "smith";

let name: string = `Gene`;
let age: number = 37;
let sentence: string = `Hello, my name is ${ name }.

I'll be ${ age + 1 } years old next month.`;
```

数组
```js
let list: number[] = [1, 2, 3]; // 表示由number元素组成的一个数组
let list: Array<number> = [1, 2, 3];
```

元组 Tuple
```js
let x: [string, number];
x = ['hello', 10]; // OK
x = [10, 'hello']; // Error

console.log(x[0].substr(1)); // OK
console.log(x[1].substr(1)); // Error, 'number' does not have 'substr'

x[3] = "world"; // Error, Property '3' does not exist on type '[string, number]'.

console.log(x[5].toString()); // Error, Property '5' does not exist on type '[string, number]'.
```

枚举
```js
enum Color {Red, Green, Blue}
let c: Color = Color.Green;

enum Color {Red = 1, Green, Blue}
let colorName: string = Color[2];

console.log(colorName);  // 显示'Green'因为上面代码里它的值是2
```

任意值
```js
let notSure: any = 4;
notSure = "maybe a string instead";
notSure = false; // okay, definitely a boolean

let list: any[] = [1, true, "free"];
list[1] = 100;
```

空值
```js
function warnUser(): void {
    console.log("This is my warning message");
}

let unusable: void = null;
let unusable: void = undefined;
```

Null 和 Undefined
```js
let u: undefined = undefined;
let n: null = null;
// 默认情况下null和undefined是所有类型的子类型。 就是说你可以把null和undefined赋值给number类型的变量。
// 然而，当你指定了--strictNullChecks标记，null和undefined只能赋值给any和它们各自的类型（有一个例外是undefined还可以赋值给void类型）。 这能避免很多常见的问题。 也许在某处你想传入一个string或null或undefined，你可以使用联合类型string | null | undefined。
```

Never
```js
// never类型表示的是那些永不存在的值的类型。 例如，never类型是那些总是会抛出异常或根本就不会有返回值的函数表达式或箭头函数表达式的返回值类型； 变量也可能是never类型，当它们被永不为真的类型保护所约束时。
// never类型是任何类型的子类型，也可以赋值给任何类型；然而，没有类型是never的子类型或可以赋值给never类型（除了never本身之外）。 即使any也不可以赋值给never。
// 返回never的函数必须存在无法达到的终点
function error(message: string): never {
    throw new Error(message);
}

// 推断的返回值类型为never
function fail(): never {
    return error("Something failed");
}

// 返回never的函数必须存在无法达到的终点
function infiniteLoop(): never {
    while (true) {
    }
}
```

Object
```js
// object表示非原始类型，也就是除number，string，boolean，bigint，symbol，null或undefined之外的类型。
// 使用object类型，就可以更好的表示像Object.create这样的API。例如：
declare function create(o: object | null): void;

create({ prop: 0 }); // OK
create(null); // OK

create(42); // Error
create("string"); // Error
create(false); // Error
create(undefined); // Error
```

类型断言
```js
// 有时候你会遇到这样的情况，你会比TypeScript更了解某个值的详细信息。 通常这会发生在你清楚地知道一个实体具有比它现有类型更确切的类型。
let someValue: any = "this is a string";
let strLength: number = (\<string\>someValue).length;

let someValue: any = "this is a string";
let strLength: number = (someValue as string).length;
// 两种形式是等价的。 至于使用哪个大多数情况下是凭个人喜好；然而，当你在TypeScript里使用JSX时，只有as语法断言是被允许的。
```

### 变量声明

为什么用let语句来声明变量？
- let与var的写法一致，主要的区别不在语法上，而是语义
- 块作用域 
  - 当用let声明一个变量，它使用的是词法作用域或块作用域
  - 不能在1个作用域里多次声明
  - 在一个嵌套作用域里内部的命名会屏蔽外部的命名

let vs. const
- 使用最小特权原则，所有变量除了你计划去修改的都应该使用const。 基本原则就是如果一个变量不需要对它写入，那么其它使用这些代码的人也不能够写入它们，并且要思考为什么会需要对这些变量重新赋值。 使用const也可以让我们更容易的推测数据的流动。  

解构
- 数组解构
```js
function f([first, second]: [number, number]) {
    console.log(first);
    console.log(second);
}
f([1, 2]);
```
- 元组解构
```js
let tuple: [number, string, boolean] = [7, "hello", true];

let [a, b, c] = tuple; // a: number, b: string, c: boolean
```
- 对象解构
```js
let {a, b}: {a: string, b: number} = o;
```

### 接口

类型检查器不会去检查属性的顺序，只要相应的属性存在并且类型也是对的就可以
```js
interface LabeledValue {
  label: string;
}

function printLabel(labeledObj: LabeledValue) {
  console.log(labeledObj.label);
}

let myObj = { size: 10, label: "Size 10 Object" };
printLabel(myObj);
```

可选属性 - 接口里的属性不全都是必需的。 有些是只在某些条件下存在，或者根本不存在
```js
interface SquareConfig {
  color?: string;
  width?: number;
}

function createSquare(config: SquareConfig): { color: string; area: number } {
  let newSquare = { color: "white", area: 100 };
  if (config.color) {
    newSquare.color = config.color;
  }
  if (config.width) {
    newSquare.area = config.width * config.width;
  }
  return newSquare;
}

let mySquare = createSquare({ color: "black" });
```

只读属性 - 一些对象属性只能在对象刚刚创建的时候修改其值
```js
interface Point {
  readonly x: number;
  readonly y: number;
}
```
TypeScript 具有ReadonlyArray<T>类型，它与Array<T>相似，只是把所有可变方法去掉了，因此可以确保数组创建后再也不能被修改：
```js
let a: number[] = [1, 2, 3, 4];
let ro: ReadonlyArray<number> = a;
ro[0] = 12; // error!
ro.push(5); // error!
ro.length = 100; // error!
a = ro; // error!
```
readonly vs const - 最简单判断该用readonly还是const的方法是看要把它做为变量使用还是做为一个属性。 做为变量使用的话用const，若做为属性则使用readonly。

额外的属性检查 - 对象字面量会被特殊对待而且会经过额外属性检查，当将它们赋值给变量或作为参数传递的时候。 如果一个对象字面量存在任何“目标类型”不包含的属性时，你会得到一个错误。
```js
// 绕开这些检查非常简单。 最简便的方法是使用类型断言：
let mySquare = createSquare({ width: 100, opacity: 0.5 } as SquareConfig);

// 最佳的方式是能够添加一个字符串索引签名
interface SquareConfig {
  color?: string;
  width?: number;
  [propName: string]: any;
}

// 最后一种跳过这些检查的方式，将这个对象赋值给一个另一个变量： 因为squareOptions不会经过额外属性检查，所以编译器不会报错。
let squareOptions = { colour: "red", width: 100 };
let mySquare = createSquare(squareOptions);
```

函数类型
```js
// 为了使用接口表示函数类型，我们需要给接口定义一个调用签名。 它就像是一个只有参数列表和返回值类型的函数定义。参数列表里的每个参数都需要名字和类型。
interface SearchFunc {
  (source: string, subString: string): boolean;
}

let mySearch: SearchFunc;
mySearch = function(source: string, subString: string) {
  let result = source.search(subString);
  return result > -1;
};

// 对于函数类型的类型检查来说，函数的参数名不需要与接口里定义的名字相匹配。 比如，我们使用下面的代码重写上面的例子：

let mySearch: SearchFunc;
mySearch = function(src: string, sub: string): boolean {
  let result = src.search(sub);
  return result > -1;
};
```

可索引的类型
```js
interface StringArray {
  [index: number]: string;
}

let myArray: StringArray;
myArray = ["Bob", "Fred"];

let myStr: string = myArray[0];

// 你可以将索引签名设置为只读，这样就防止了给索引赋值：

interface ReadonlyStringArray {
  readonly [index: number]: string;
}
let myArray: ReadonlyStringArray = ["Alice", "Bob"];
myArray[2] = "Mallory"; // error!

```

类类型

```js
// 可以在接口中描述一个方法，在类里实现它，如同下面的setTime方法一样：

interface ClockInterface {
  currentTime: Date;
  setTime(d: Date): void;
}

class Clock implements ClockInterface {
  currentTime: Date = new Date();
  setTime(d: Date) {
    this.currentTime = d;
  }
  constructor(h: number, m: number) {}
}

// 类表达式：

interface ClockConstructor {
  new (hour: number, minute: number);
}

interface ClockInterface {
  tick();
}

const Clock: ClockConstructor = class Clock implements ClockInterface {
  constructor(h: number, m: number) {}
  tick() {
    console.log("beep beep");
  }
};
```

继承接口
```js
interface Shape {
  color: string;
}

interface Square extends Shape {
  sideLength: number;
}

let square = {} as Square;
square.color = "blue";
square.sideLength = 10;
```

混合类型
```js
// 一个对象可以同时做为函数和对象使用，并带有额外的属性。

interface Counter {
  (start: number): string;
  interval: number;
  reset(): void;
}

function getCounter(): Counter {
  let counter = function(start: number) {} as Counter;
  counter.interval = 123;
  counter.reset = function() {};
  return counter;
}

let c = getCounter();
c(10);
c.reset();
c.interval = 5.0;
```

### 类

使用类的例子：
```js
class Greeter {
    greeting: string;
    constructor(message: string) {
        this.greeting = message;
    }
    greet() {
        return "Hello, " + this.greeting;
    }
}

let greeter = new Greeter("world");
```

继承
```js
// 这个例子展示了最基本的继承：类从基类中继承了属性和方法。 这里，Dog是一个派生类，它派生自Animal基类，通过extends关键字。 派生类通常被称作子类，基类通常被称作超类。
class Animal {
    move(distanceInMeters: number = 0) {
        console.log(`Animal moved ${distanceInMeters}m.`);
    }
}

class Dog extends Animal {
    bark() {
        console.log('Woof! Woof!');
    }
}

const dog = new Dog();
dog.bark();
dog.move(10);
dog.bark();

// 更加复杂的例子。
// 与前一个例子的不同点是，派生类包含了一个构造函数，它必须调用super()，它会执行基类的构造函数。 而且，在构造函数里访问this的属性之前，我们一定要调用super()。 这个是TypeScript强制执行的一条重要规则。
class Animal {
    name: string;
    constructor(theName: string) { this.name = theName; }
    move(distanceInMeters: number = 0) {
        console.log(`${this.name} moved ${distanceInMeters}m.`);
    }
}

class Snake extends Animal {
    constructor(name: string) { super(name); }
    move(distanceInMeters = 5) {
        console.log("Slithering...");
        super.move(distanceInMeters);
    }
}

class Horse extends Animal {
    constructor(name: string) { super(name); }
    move(distanceInMeters = 45) {
        console.log("Galloping...");
        super.move(distanceInMeters);
    }
}

let sam = new Snake("Sammy the Python");
let tom: Animal = new Horse("Tommy the Palomino");

sam.move();
tom.move(34);
```

公共，私有与受保护的修饰符

默认为public
```ts
// 你也可以明确的将一个成员标记成public。 我们可以用下面的方式来重写上面的Animal类：
class Animal {
    public name: string;
    public constructor(theName: string) { this.name = theName; }
    public move(distanceInMeters: number) {
        console.log(`${this.name} moved ${distanceInMeters}m.`);
    }
}
```


