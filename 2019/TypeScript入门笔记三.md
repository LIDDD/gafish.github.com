
### 泛型（Generics）

类型变量，它是一种特殊的变量，只用于表示类型而不是值。
```ts
function identity<T>(arg: T): T {
    return arg;
}
```

两种方法使用。 

```ts
// 第一种是，传入所有的参数，包含类型参数：
let output = identity<string>("myString");  // type of output will be 'string'

// 第二种方法更普遍。利用了类型推论 -- 即编译器会根据传入的参数自动地帮助我们确定T的类型：
let output = identity("myString");  // type of output will be 'string'
```

泛型变量
```ts
function loggingIdentity<T>(arg: T[]): T[] {
    console.log(arg.length);  // Array has a .length, so no more error
    return arg;
}
```

使用不同的泛型参数名，只要在数量上和使用方式上能对应上就可以。
```ts
function identity<T>(arg: T): T {
    return arg;
}

let myIdentity: <U>(arg: U) => U = identity;
```

第一个泛型接口
```ts
interface GenericIdentityFn {
    <T>(arg: T): T;
}

function identity<T>(arg: T): T {
    return arg;
}

let myIdentity: GenericIdentityFn = identity;
```

泛型类
```ts
class GenericNumber<T> {
    zeroValue: T;
    add: (x: T, y: T) => T;
}

let myGenericNumber = new GenericNumber<number>();
myGenericNumber.zeroValue = 0;
myGenericNumber.add = function(x, y) { return x + y; };
```

泛型约束
```ts
interface Lengthwise {
    length: number;
}

function loggingIdentity<T extends Lengthwise>(arg: T): T {
    console.log(arg.length);  // Now we know it has a .length property, so no more error
    return arg;
}
```

一个更高级的例子，使用原型属性推断并约束构造函数与类实例的关系。
```ts
class BeeKeeper {
    hasMask: boolean;
}

class ZooKeeper {
    nametag: string;
}

class Animal {
    numLegs: number;
}

class Bee extends Animal {
    keeper: BeeKeeper;
}

class Lion extends Animal {
    keeper: ZooKeeper;
}

function createInstance<A extends Animal>(c: new () => A): A {
    return new c();
}

createInstance(Lion).keeper.nametag;  // typechecks!
createInstance(Bee).keeper.hasMask;   // typechecks!
```

### 枚举（Enums）

数字枚举
```ts
enum Direction {
    Up = 1,
    Down,
    Left,
    Right
}
// 如上，我们定义了一个数字枚举，Up使用初始化为1。 其余的成员会从1开始自动增长

enum Response {
    No = 0,
    Yes = 1,
}

function respond(recipient: string, message: Response): void {
    // ...
}

respond("Princess Caroline", Response.Yes)
```


字符串枚举
```ts
enum Direction {
    Up = "UP",
    Down = "DOWN",
    Left = "LEFT",
    Right = "RIGHT",
}
```

字面量枚举成员。 

字面量枚举成员是指不带有初始值的常量枚举成员，或者是值被初始化为

- 任何字符串字面量（例如："foo"，"bar"，"baz"）
- 任何数字字面量（例如：1, 100）
- 应用了一元-符号的数字字面量（例如：-1, -100）
- 当所有枚举成员都拥有字面量枚举值时，它就带有了一种特殊的语义。

首先，枚举成员成为了类型！ 例如，我们可以说某些成员只能是枚举成员的值：
```ts
enum ShapeKind {
    Circle,
    Square,
}

interface Circle {
    kind: ShapeKind.Circle;
    radius: number;
}

interface Square {
    kind: ShapeKind.Square;
    sideLength: number;
}

let c: Circle = {
    kind: ShapeKind.Square, // Error! Type 'ShapeKind.Square' is not assignable to type 'ShapeKind.Circle'.
    radius: 100,
}
```

另一个变化是枚举类型本身变成了每个枚举成员的联合
```ts
enum E {
    Foo,
    Bar,
}

function f(x: E) {
    if (x !== E.Foo || x !== E.Bar) {
        //             ~~~~~~~~~~~
        // Error! This condition will always return 'true' since the types 'E.Foo' and 'E.Bar' have no overlap.
    }
}
```

编译时的枚举

尽管一个枚举是在运行时真正存在的对象，但keyof关键字的行为与其作用在对象上时有所不同。应该使用keyof typeof来获取一个表示枚举里所有字符串key的类型。
```ts
enum LogLevel {
    ERROR, WARN, INFO, DEBUG
}

/**
 * 等同于：
 * type LogLevelStrings = 'ERROR' | 'WARN' | 'INFO' | 'DEBUG';
 */
type LogLevelStrings = keyof typeof LogLevel;

function printImportant(key: LogLevelStrings, message: string) {
    const num = LogLevel[key];
    if (num <= LogLevel.WARN) {
       console.log('Log level key is: ', key);
       console.log('Log level value is: ', num);
       console.log('Log level message is: ', message);
    }
}
printImportant('ERROR', 'This is a message');
```

反向映射
```ts
enum Enum {
    A
}
let a = Enum.A;
let nameOfA = Enum[a]; // "A"
// 要注意的是不会为字符串枚举成员生成反向映射。
```

常量枚举
```ts
const enum Directions {
    Up,
    Down,
    Left,
    Right
}

let directions = [Directions.Up, Directions.Down, Directions.Left, Directions.Right]

// 常量枚举只能使用常量枚举表达式，并且不同于常规的枚举，它们在编译阶段会被删除
// 生成后的代码为：
var directions = [0 /* Up */, 1 /* Down */, 2 /* Left */, 3 /* Right */];
```

### 类型推断（Type Inference）


