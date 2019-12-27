
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