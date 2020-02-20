### 命名空间和模块（namespaces-and-modules）

从ECMAScript 2015开始，模块成为了语言内置的部分，应该会被所有正常的解释引擎所支持。 因此，对于新项目来说推荐使用模块做为组织代码的方式。

命名空间和模块的陷阱

- 一个常见的错误是使用/// <reference>引用模块文件，应该使用import
```ts
// myModules.d.ts
// In a .d.ts file or .ts file that is not a module:
declare module "SomeModule" {
    export function fn(): string;
}
// myOtherModule.ts
/// <reference path="myModules.d.ts" />
import * as m from "SomeModule";
```

- 不必要的命名空间
```ts
// shapes.ts
export namespace Shapes {
    export class Triangle { /* ... */ }
    export class Square { /* ... */ }
}

// shapeConsumer.ts
import * as shapes from "./shapes";
let t = new shapes.Shapes.Triangle(); // shapes.Shapes?
```

### 模块解析(module-resolution)
