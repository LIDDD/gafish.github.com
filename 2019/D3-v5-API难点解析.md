# D3 v5 API难点解析

开始学习 D3 v5 版本的 api，一般的 api 看看文档写个 Demo 就差不多明白了，但有些 api 涉及的知识比较偏，或者是需要一些专业知识来加以理解，所以本文会记录下这些相对来说比较难理解的点，以便日后再次查阅。

## d3-array

> API 文档：https://d3js.org.cn/document/d3-array/

### d3.quantile & d3.median

`d3.quantile` 的定义：返回指定 有序数组 的 p-分位数, `p` 是 [0, 1] 之间的小数。

`有序数组` 指的是需要用户自行做递增排序，这样得到的结果才符合预期
```js
d3.quantile([4, 2, 7, 3, 5, 1, 6].sort(d3.ascending), 0.25); // 输出： 2.5
```

`p-分位数` 的意思是把数组的看成是 [0, 1] 的区间，取 `p` 位置通过计算得到的对应数值

![](https://github.com/gafish/gafish.github.com/raw/master/images/Jietu20190627-112504@2x.jpg)

`d3.median` 赞同于 `p = 0.5`，它取的值叫中位数，意思是在这组数据中，有一半的数据比他大，有一半的数据比他小

示例代码
```js
d3.quantile([1, 2, 3, 4, 5, 6, 7], 0.25); // 输出： 2.5
d3.quantile([1, 2, 3, 4, 5, 6, 7], 0.5); // 输出： 4
d3.median([1, 2, 3, 4, 5, 6, 7]); // 输出： 4
d3.quantile([4, 2, 7, 3, 5, 1, 6], 0.25); // 输出： 4.5
d3.quantile([4, 2, 7, 3, 5, 1, 6].sort(d3.ascending), 0.25); // 输出： 2.5
d3.quantile([4, 2, 7, 3, 5, 1, 6].sort(d3.descending), 0.25); // 输出： 5.5
```

### d3.variance & d3.deviation

`d3.variance` 的定义是求样本方差，`d3.deviation` 的定义是求标准差，其中*方差是实际值与期望值之差平方的平均值，而标准差是方差算术平方根*。

百度百科对方差的定义如下：

> 方差是和中心偏离的程度，用来衡量一批数据的波动大小（即这批数据偏离平均数的大小）并把它叫做这组数据的方差，记作S2。 在样本容量相同的情况下，方差越大，说明数据的波动越大，越不稳定。

计算公式，其中，x表示样本的平均数，n表示样本的数量，xi表示样本个体

![](https://gss1.bdstatic.com/-vo3dSag_xI4khGkpoWK1HF6hhy/baike/s%3D274/sign=d7c3b0e789d4b31cf43c93bcb3d7276f/21a4462309f79052050cec9a0ef3d7ca7bcbd507.jpg)

以 `[1, 2, 3, 4, 5, 99]` 来演示下计算过程

```js
数组
[1, 2, 3, 4, 5, 99]

平均值
d3.mean([1, 2, 3, 4, 5, 99]) = 19

实际值与期望值之差的平方
[
    1 ==>> 1 - 19 = -18 ==>> -18 * -18 = 324
    2 ==>> 2 - 19 = -17 ==>> -17 * -17 = 289
    3 ==>> 3 - 19 = -16 ==>> -16 * -16 = 256
    4 ==>> 4 - 19 = -15 ==>> -15 * -15 = 225
    5 ==>> 5 - 19 = -14 ==>> -14 * -14 = 196
    99 ==>> 99 - 19 = 80 ==>> 80 * 80 = 6400
]

平方值的平均值(根据公式，需要 样本总数-1)
324 + 289 + 256 + 225 + 196 + 6400 = 7690 ==>> 7690 / (6 - 1) = 1538

对比方差api的结果
d3.variance([1, 2, 3, 4, 5, 99]); 输出 1538

标准差的计算方式
Math.sqrt(1538) = 39.21734310225516

对比标准差api的结果
d3.deviation([1, 2, 3, 4, 5, 99]); 输出 39.21734310225516
```

### d3.bisectLeft & d3.bisectRight & d3.bisect

`d3.bisectLeft` 的定义是：对一个 排序的数组 进行二分查找，获取某数组项左边的位置索引，`d3.bisectRight` 取右边的位置索引，`d3.bisect` 等同于 `d3.bisectRight`

这里 `排序的数组` 必须是一个用户自行处理的 `递增排序` 数组，否则输出的结果完全是错的

如果查找项在数组中存在
- `d3.bisectLeft` 返回此位置的左边索引
- `d3.bisectRight` `d3.bisect`  返回此位置的右边索引

如果查找项在数组中不存在，则都返回第一个大于此项的值的左边索引

示例代码
```js
d3.bisectLeft([3, 2, 1, 7, 4, 5].sort(d3.ascending), 5); // 输出： 4
d3.bisectRight([3, 2, 1, 7, 4, 5].sort(d3.ascending), 5); // 输出： 5
d3.bisect([3, 2, 1, 7, 4, 5].sort(d3.ascending), 5); // 输出： 5
d3.bisectLeft([3, 2, 1, 7, 4, 5].sort(d3.ascending), 6); // 输出： 5
d3.bisectRight([3, 2, 1, 7, 4, 5].sort(d3.ascending), 6); // 输出： 5
d3.bisect([3, 2, 1, 7, 4, 5].sort(d3.ascending), 6); // 输出： 5
```

`d3.bisectLeft(array, x[, lo[, hi]]) ` 通过 lo 和 hi 参数可以控制输出索引的范围，如果小于 `lo` 则输出 `lo`，如果大于 `hi` 则输出 `hi`

示例代码
```js
d3.bisectLeft([3, 2, 1, 7, 4, 5].sort(d3.ascending), 3, 3, 5); // 输出： 3
d3.bisectLeft([3, 2, 1, 7, 4, 5].sort(d3.ascending), 3); // 对比输出： 2
d3.bisectLeft([3, 2, 1, 7, 4, 5].sort(d3.ascending), 7, 3, 4); // 输出： 4
d3.bisectLeft([3, 2, 1, 7, 4, 5].sort(d3.ascending), 7); // 对比输出： 5
```

### d3.bisector

`d3.bisector` 可以看做是 `bisect` 的补充，它可以根据指定的 函数 返回一个新的二分查找对象，这个方法可以被用来二等分对象数组, 而不会仅仅局限于基本的数组

在[老版本](https://github.com/d3/d3/wiki/%E6%95%B0%E7%BB%84#d3_bisector)中，函数的第2个参数是数组中用于排序的下一项，而在 v5 版本中是查找项
```js
var bisect = d3.bisector(function(d, x) { return d.date - x; }).right;
bisect.left([3, 5, 9, 11, 15], 20);
```
这里的 x 就是上面所说的查找项 `20`，至于它有什么用，我还没弄的很明白，可能在某些特殊场景需要用到

一般情况下，我们只是用它来在对象数组中选择需要查找的字段

示例代码
```js
var data = [ { value: 11 }, { value: 33 }, { value: 22 }, { value: 55 }];
var bisect = d3.bisector(function(d) { return d.value; });
var result = bisect.left(data.sort((a, b) => {
    return a.value < b.value ? -1 : a.value > b.value ? 1 : a.value >= b.value ? 0 : NaN;
}), 33)
```

### d3.ticks & d3.tickIncrement & d3.tickStep

在早期的版本中，`d3.ticks` 使用的是 `d3.tickStep` 来计算 step，但因为 IEEE 754 浮点数的存储原因, 返回的值可能不精确，从 `d3-array 1.2.0` 开始改为使用 `d3.tickIncrement`。

`d3.tickIncrement` 的值永远为整数，在 start 大于 step 时输出的是为负整数，这主要是为了在 `d3.ticks` 中使用，正常情况下还是建议使用 `d3.tickStep`。

示例代码
```js
d3.tickStep(1, 100, 6); // 输出： 20
d3.tickStep(1, 2, 6); // 输出： 0.2
d3.tickIncrement(1, 100, 6); // 输出： 20
d3.tickIncrement(1, 2, 6); // 输出： -5
```

### d3.transpose & d3.zip

事实上，`d3.zip` 只是一种调用 `d3.transpose` 的方法。唯一的区别在于它们的语法：其中 `d3.zip` 接收n个数组作为独立参数，`d3.transpose` 接收数组数组（矩阵）作为其唯一参数。

示例代码
```js
d3.zip([1, 2], [3, 4]); // 输出： [[1,3],[2,4]]
d3.transpose([[1, 2], [3, 4]]); // 输出： [[1,3],[2,4]]
```

### d3.histogram

`d3.histogram` 用于构建一个新的直方图生成器，关于直方图解释可参见[百科](https://baike.baidu.com/item/%E7%9B%B4%E6%96%B9%E5%9B%BE)，`d3.histogram()(data)` 通过直方图生成器生成的直方图对象数组，也叫分箱数组，每个分箱包含4种数据

- 被分配到该分箱的一组来自 data 的数据；
- `length` 属性，用来表示当前分箱的数据数；
- `x0` 当前分箱的最小值(包含);
- `x1` 当前分箱的最大值(不包含, 除非是最后一个分箱)；

直方图生成器有3个方法

- `value` 用于指定要计算的值；
- `domain` 设置当前直方图生成器的输入区间；
- `thresholds` 设置阈值区间数组或阈值数量；

示例代码
```js
const histogram = d3.histogram();
histogram
    .value(d => d.value)
    .domain([0, 150])
    // .thresholds(30) // 阈值数量
    .thresholds([5, 10, 20, 30, 40, 50, 80, 90, 100]); // 阈值区间数组
const data = [];
for (let i = 0; i < 100; i++) {
    data.push({ value: Math.round(Math.random() * 100) });
}
const result = histogram(data);

result.length; // 输出 10
result[0]; // 输出第1条数据：[{"value":1},{"value":3},{"value":2},{"value":3},{"value":4}] | length: 5 | x0: 0 | x1: 5
```

## d3-axis

### axis.tickSize & axis.tickSizeInner & axis.tickSizeOuter

`axis.tickSize` 是内外侧刻度使用相同的值，`axis.tickSizeOuter` 外侧的刻度会跟 `axis.tickSizeInner` 的头尾刻度重合，所以当设置的外侧刻度比内侧刻度小时会感觉不起效果，最佳实践是内外侧设置一样的刻度，或者外侧比内侧大。

## d3-force

### simulation.alphaDecay & simulation.velocityDecay

`alphaDecay` 是 alpha 衰减系数，影响的是运行时间，`velocityDecay` 是摩擦阻力系数，影响的是运行速度

### 力学模型

- Centering: `center` force (中心力) 可以将所有的节点的中心一致的向指定的位置 ⟨x,y⟩ 移动 
- Collision: `collision` 力模型将节点视为具有一定 radius 的圆，而不是点，并且阻止节点之间的重叠 
- Links: `link` froce(弹簧模型) 可以根据 link distance 将有关联的两个节点拉近或者推远 
- Many-Body: `charge` (N-body问题，译为电荷力比较容易理解) 在所有的节点之间相互作用 
- Positioning: `x` 和 `y` 定位力模型可以将节点沿着指定的维度进行排列

官方文档中只列了以上5种，但还有一种

- forceRadial：`r` 创建一沿着指定 radius、圆心坐标在 ⟨x,y⟩ 的圆环的环形布局。如果没有指定 x 和 y 则默认为 ⟨0,0⟩.

用法示例
```js
d3.forceSimulation(nodes)
    .force("center", d3.forceCenter(300, 150))
    .force("collision", d3.forceCollide(30))
    .force("link", d3.forceLink(links).id(d => d.id))
    .force("charge", d3.forceManyBody())
    .force("x", d3.forceX(300))
    .force("y", d3.forceY(100))
    .force("r", d3.forceRadial(100, 300, 150))
```

### manyBody.theta

查了一些资料，但还是似懂非懂，大概意思就是，默认值是0.9，值越大，本来靠近中心点的节点，距离会越远，还需要继续查资料

## d3-zoom

### d3.zoomTransform

`d3.zoomTransform` 主要是用来对节点做自定义缩放和转换，它用来生成缩放结果，但不会直接作用在节点上，需要手动的为节点添加 `attr('transform', transform)` 才行，或者通过 `zoom.transform` 执行转换，会触发 `zoom` 事件。

```js
const transform = d3.zoomTransform(d3.select('#svg circle'))
    .scale(1.5);
const zoom = d3.zoom()
    .on('zoom', () => {
        circle.attr('transform', d3.event.transform);
    });
zoom.transform(circle, transform);
```

### d3.zoomIdentity

`d3.zoomIdentity` 的作用是恢复默认缩放，相当于 `translate(0, 0) scale(1)`

## d3.shape

### arc.padRadius

如果设置了 `arc.padRadius` ，就会和 `arc.padAngle` 一起计算出每个饼图的左右 padding 值，然后会均匀的分布在当前饼图的两端。如果没有指定，padAngle 会和设定的内外径一起计算出左右 padding。

### arc.content

如果想在 canvas 中使用，将 content 设置为 canvas 元素

### pie(data[, arguments…])

这里的 `arguments` 已经没有意义，传入的参数不会被使用

## d3-array

### d3.quantile(array, p[, accessor])

返回指定 有序数组(自行做递增排序) 使用 R-7 方法返回数组的 p-分位数，p 是 [0, 1] 之间的小数. 例如 `d3.median` 相当于 p = 0.5, 使用 p = 0.25 计算第一个四分位数, p = 0.75 表示第三个四分位数

### d3.median(array[, accessor])

对指定的数组使用 R-7 方法返回数组的中位数，等同于 `d3.quantile` 中的 p = 0.5 

中位数，又称中点数，中值。中位数是按顺序排列的一组数据中居于中间位置的数，即在这组数据中，有一半的数据比他大，有一半的数据比他小


### d3.variance(array[, accessor])

<p>返回给定数组的方差</p>
<p><small>方差和标准方差用于度量随机变量和均值之间的偏离程度 https://www.jb51.net/article/160968.htm</small></p>
<pre>
    //定义数组
    var numbers1 = [1,9,7,9,5,8,9,10]
    console.log(d3.mean(numbers1))     //返回平均值7.25
    console.log(d3.variance(numbers1))   //返回方差值 约8.79
    console.log(d3.deviation(numbers1))   //返回标准差值 约2.96

    var numbers2 = [7,8,6,7,7,8,8,7];
    console.log(d3.mean(numbers2))     //返回平均值7.25
    console.log(d3.variance(numbers2))   //返回方差值 约0.5
    console.log(d3.deviation(numbers2))   //返回标准差值 约0.71

    这段代码中，数组numbers1和numbers2的平均值都是7.25，但是前者的方差和标准差分别为8.79和2.96，后者的方差和标准差分别为0.50和0.71，表明数组numbers1中的值偏离平均值7.25的程度较大。
</pre>


### d3.bisectLeft(array, x[, lo[, hi]])

<p>对一个排序的数组进行二分查找，获取某数组项左边的位置</p>
<p><small>bisectLeft()所使用的数组<strong>必须经过递增排序</strong>。第二个参数用于指定查找项，如果此项在数组中存在，则返回此位置的左边。如果此项在数组中不存在，则返回第一个大于此项的值的左边</small></p>
<p><small>https://www.jb51.net/article/160968.htm</small></p>


### d3.bisector(accessor | comparator)

<p>根据指定的 accessor 或 comparator 返回一个新的二分查找对象，这个方法可以被用来二等分对象数组, 而不会仅仅局限于基本的数组(基础数据类型组成的数组)，可以看做是 bisect 的补充</p>


### d3.shuffle(array[, lo[, hi]])

<p>使用 Fisher–Yates shuffle 算法将数组的顺序随机打乱</p>
<p>Fisher–Yates shuffle 洗牌算法：https://gaohaoyang.github.io/2016/10/16/shuffle-algorithm/ </p>


## 参考资料

- https://www.jb51.net/article/160968.htm
- https://baike.baidu.com/item/%E6%96%B9%E5%B7%AE
- https://www.twblogs.net/a/5b80605a2b71772165a744c0
- https://d3js.org.cn/document/
