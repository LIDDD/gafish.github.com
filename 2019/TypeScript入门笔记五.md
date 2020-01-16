
### 实用工具类型（Utility Types）

目录

* `Partial<T>`: 构造类型T，并将它所有的属性设置为可选的。它的返回类型表示输入类型的所有子类型。
* `Readonly<T>`: 构造类型T，并将它所有的属性设置为readonly，也就是说构造出的类型的属性不能被再次赋值。
* `Record<K,T>`: 构造一个类型，其属性名的类型为K，属性值的类型为T。这个工具可用来将某个类型的属性映射到另一个类型上。
* `Pick<T,K>`: 从类型T中挑选部分属性K来构造类型。
* `Omit<T,K>`: 从类型T中获取所有属性，然后从中剔除K属性后构造一个类型。
* `Exclude<T,U>`: 从类型T中剔除所有可以赋值给U的属性，然后构造一个类型。
* `Extract<T,U>`: 从类型T中提取所有可以赋值给U的类型，然后构造一个类型。
* `NonNullable<T>`: 从类型T中剔除null和undefined，然后构造一个类型。
* `ReturnType<T>`: 由函数类型T的返回值类型构造一个类型。
* `InstanceType<T>`: 由构造函数类型T的实例类型构造一个类型。
* `Required<T>`: 构造一个类型，使类型T的所有属性为required。
* `ThisType<T>`: 这个工具不会返回一个转换后的类型。它做为上下文的this类型的一个标记。注意，若想使用此类型，必须启用--noImplicitThis。

### Symbols

自ECMAScript 2015起，symbol成为了一种新的原生类型，就像number和string一样。

Symbols是不可改变且唯一的。
```js
let sym2 = Symbol("key");
let sym3 = Symbol("key");

sym2 === sym3; // false, symbols是唯一的
```

### 可迭代性（Iterators and Generators）

当一个对象实现了Symbol.iterator属性时，我们认为它是可迭代的。 一些内置的类型如Array，Map，Set，String，Int32Array，Uint32Array等都已经实现了各自的Symbol.iterator。 对象上的Symbol.iterator函数负责返回供迭代的值。

for..of 语句
```js
let someArray = [1, "string", false];

for (let entry of someArray) {
    console.log(entry); // 1, "string", false
}
```

### 模块（Modules）

导出
```ts
// 任何声明（比如变量，函数，类，类型别名或接口）都能够通过添加export关键字来导出。
export interface StringValidator {
    isAcceptable(s: string): boolean;
}
// 导出声明
import { StringValidator } from "./StringValidator";
export const numberRegexp = /^[0-9]+$/;
export class ZipCodeValidator implements StringValidator {
    isAcceptable(s: string) {
        return s.length === 5 && numberRegexp.test(s);
    }
}
// 导出语句
class ZipCodeValidator implements StringValidator {
    isAcceptable(s: string) {
        return s.length === 5 && numberRegexp.test(s);
    }
}
export { ZipCodeValidator };
export { ZipCodeValidator as mainValidator };
// 重新导出
export {ZipCodeValidator as RegExpBasedZipCodeValidator} from "./ZipCodeValidator";
// 并把他们导出的内容联合在一起
export * from "./StringValidator"; // exports 'StringValidator' interface
export * from "./ZipCodeValidator";  // exports 'ZipCodeValidator' and const 'numberRegexp' class
export * from "./ParseIntBasedZipCodeValidator"; //  exports the 'ParseIntBasedZipCodeValidator' class
                                                 // and re-exports 'RegExpBasedZipCodeValidator' as alias
                                                 // of the 'ZipCodeValidator' class from 'ZipCodeValidator.ts'
```

导入
```ts
// 导入一个模块中的某个导出内容
import { ZipCodeValidator } from "./ZipCodeValidator";
// 对导入内容重命名
import { ZipCodeValidator as ZCV } from "./ZipCodeValidator";
// 将整个模块导入到一个变量
import * as validator from "./ZipCodeValidator";
// 设置一些全局状态供其它模块使用
import "./my-module.js";
```

默认导出
```ts
// uery.d.ts
declare let $: jQuery;
export default $;
// App.ts
import $ from "jQuery";

$("button.continue").html( "Next Step..." );
```

类和函数声明可以直接被标记为默认导出。 标记为默认导出的类和函数的名字是可以省略的。
```ts
export default class ZipCodeValidator {
    static numberRegexp = /^[0-9]+$/;
    isAcceptable(s: string) {
        return s.length === 5 && ZipCodeValidator.numberRegexp.test(s);
    }
}

const numberRegexp = /^[0-9]+$/;

export default function (s: string) {
    return s.length === 5 && numberRegexp.test(s);
}

// default导出也可以是一个值
export default "123";
```

export = 和 import = require()

为了支持CommonJS和AMD的exports, TypeScript提供了export =语法。

export =语法定义一个模块的导出对象。 这里的对象一词指的是类，接口，命名空间，函数或枚举。

若使用export =导出一个模块，则必须使用TypeScript的特定语法import module = require("module")来导入此模块。
```ts
// pCodeValidator.ts
let numberRegexp = /^[0-9]+$/;
class ZipCodeValidator {
    isAcceptable(s: string) {
        return s.length === 5 && numberRegexp.test(s);
    }
}
export = ZipCodeValidator;

// Test.ts
import zip = require("./ZipCodeValidator");

// Some samples to try
let strings = ["Hello", "98052", "101"];

// Validators to use
let validator = new zip();

// Show whether each string passed each validator
strings.forEach(s => {
  console.log(`"${ s }" - ${ validator.isAcceptable(s) ? "matches" : "does not match" }`);
});
```

可选的模块加载
```ts
// 为了确保类型安全性，我们可以使用typeof关键字。 typeof关键字，当在表示类型的地方使用时，会得出一个类型值，这里就表示模块的类型。

// 示例：Node.js里的动态模块加载
declare function require(moduleName: string): any;

import { ZipCodeValidator as Zip } from "./ZipCodeValidator";

if (needZipValidation) {
    let ZipCodeValidator: typeof Zip = require("./ZipCodeValidator");
    let validator = new ZipCodeValidator();
    if (validator.isAcceptable("...")) { /* ... */ }
}
// 示例：require.js里的动态模块加载
declare function require(moduleNames: string[], onLoad: (...args: any[]) => void): void;

import * as Zip from "./ZipCodeValidator";

if (needZipValidation) {
    require(["./ZipCodeValidator"], (ZipCodeValidator: typeof Zip) => {
        let validator = new ZipCodeValidator.ZipCodeValidator();
        if (validator.isAcceptable("...")) { /* ... */ }
    });
}
// 示例：System.js里的动态模块加载
declare const System: any;

import { ZipCodeValidator as Zip } from "./ZipCodeValidator";

if (needZipValidation) {
    System.import("./ZipCodeValidator").then((ZipCodeValidator: typeof Zip) => {
        var x = new ZipCodeValidator();
        if (x.isAcceptable("...")) { /* ... */ }
    });
}
```

使用其它的JavaScript库
```ts
// 外部模块
// node.d.ts (simplified excerpt)
declare module "url" {
    export interface Url {
        protocol?: string;
        hostname?: string;
        pathname?: string;
    }

    export function parse(urlStr: string, parseQueryString?, slashesDenoteHost?): Url;
}

declare module "path" {
    export function normalize(p: string): string;
    export function join(...paths: any[]): string;
    export let sep: string;
}
// 现在我们可以/// <reference> node.d.ts并且使用import url = require("url");或import * as URL from "url"加载模块。

/// <reference path="node.d.ts"/>
import * as URL from "url";
let myUrl = URL.parse("http://www.typescriptlang.org");
```

外部模块简写
```ts
// declarations.d.ts
declare module "hot-new-module";
// 简写模块里所有导出的类型将是any。

import x, {y} from "hot-new-module";
x(y);
```

创建模块结构指导
```ts
// 如果仅导出单个 class 或 function，使用 export default
export default class SomeType {
  constructor() { ... }
}

// 如果要导出多个对象，把它们放在顶层里导出
export class SomeType { /* ... */ }
export function someFunc() { /* ... */ }

import { SomeType, SomeFunc } from "./MyThings";
let x = new SomeType();
let y = someFunc();

// 使用命名空间导入模式当你要导出大量内容的时候
export class Dog { ... }
export class Cat { ... }
export class Tree { ... }
export class Flower { ... }

import * as myLargeModule from "./MyLargeModule.ts";
let x = new myLargeModule.Dog();

```