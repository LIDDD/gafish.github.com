# Loading动效实现背后的思考过程

> 本着严肃认真的态度，听取了大家的一些意见，对动画流畅度及还原度做了优化

有一个制作Loading动效的需求，设计师从AE导出了动画JSON数据，但需要加载 [lottie-web](https://github.com/airbnb/lottie-web) 才能播放，考虑到这种小动效并不是业务中的常见需求，所以我不打算引入 `lottie-web`，而是直接根据动画效果自己用CSS写一个，记录动效实现的思考过程。

## 动效原型

![](https://github.com/gafish/gafish.github.com/raw/master/images/loading.gif)


## 观察细节

- 竖线在高度和宽度上有变化，位置上保持垂直居中，动画时长1秒；
- 坚线有上下渐变效果；
- 从左到右的过程具有波浪效果；
- 动画的开始到结束是一个整体，只有最后一个竖线的动画结束之后才会开始下一轮动画；
- 每根竖线提伸到最高的时间和结束的时间都比它前一根要晚一点；

## 实现过程

### 1、静态样式

为了实现宽度变化时，竖线之间不会互相影响，span 本身作为容器，通过 after 伪类来实现动画。

```css
.loading,
.loading > span {
    box-sizing: border-box;
}
.loading {
    font-size: 0;
    margin: auto;
    position: absolute;
    top: 0; left: 0; bottom: 0; right: 0;
    width: 110px;
    height: 75px;
    line-height: 75px;
    text-align: center;
    outline: 1px dashed #ccc;
}

.loading > span {
    display: inline-block;
    width: 22px;
    outline: 1px dashed #eee;
}

.loading > span::after {
    content: '';
    display: inline-block;
    width: 10px;
    height: 10px;
    border-radius: 5px;
    vertical-align: middle;
    background-image: linear-gradient(0deg, #00F4AA 0%, #0E85FF 100%);
}
```

![](https://github.com/gafish/gafish.github.com/raw/master/images/Jietu20190704-074955.jpg)

### 2、实现波浪效果

一般的波浪效果实现上都是通过 `animate-delay` 让每根竖线延迟开始动画，但这里动画从开始到结束是一个整体，所以这里我们通过为每个竖线独立设置动画进度来实现，达到最高点的时间从前往后依次推迟10%，结束时间从后往前依次提前10%。

```css
.loading > span:nth-child(1)::after { animation: loadingAnim1 1s infinite ease; }
.loading > span:nth-child(2)::after { animation: loadingAnim2 1s infinite ease; }
.loading > span:nth-child(3)::after { animation: loadingAnim3 1s infinite ease; }
.loading > span:nth-child(4)::after { animation: loadingAnim4 1s infinite ease; }
.loading > span:nth-child(5)::after { animation: loadingAnim5 1s infinite ease; }

/*
* Animation
*/
@keyframes loadingAnim1 {
    0% { height: 10px; }
    10% { height: 75px; }
    50% { height: 10px; }
}
@keyframes loadingAnim2 {
    0% { height: 10px; }
    20% { height: 75px; }
    60% { height: 10px; }
}
@keyframes loadingAnim3 {
    0% { height: 10px; }
    30% { height: 75px; }
    70% { height: 10px; }
}
@keyframes loadingAnim4 {
    0% { height: 10px; }
    40% { height: 75px; }
    80% { height: 10px; }
}
@keyframes loadingAnim5 {
    0% { height: 10px; }
    50% { height: 75px; }
    90% { height: 10px; }
}
```

![](https://github.com/gafish/gafish.github.com/raw/master/images/Jietu20190704-091232.gif)

### 3、设置不同的高度和宽度

每根竖线的最大拉伸高度不一样，同时提伸后的宽度也会变小，相应的圆角也有变化

```css
@keyframes loadingAnim1 {
    0% { height: 10px; width: 10px; border-radius: 5px; }
    10% { height: 20px; width: 8px; border-radius: 4px; }
    50% { height: 10px; width: 10px; border-radius: 5px; }
}
@keyframes loadingAnim2 {
    0% { height: 10px; width: 10px; border-radius: 5px; }
    20% { height: 38px; width: 8px; border-radius: 4px; }
    60% { height: 10px; width: 10px; border-radius: 5px; }
}
@keyframes loadingAnim3 {
    0% { height: 10px; width: 10px; border-radius: 5px; }
    30% { height: 75px; width: 8px; border-radius: 4px; }
    70% { height: 10px; width: 10px; border-radius: 5px; }
}
@keyframes loadingAnim4 {
    0% { height: 10px; width: 10px; border-radius: 5px; }
    40% { height: 38px; width: 8px; border-radius: 4px; }
    80% { height: 10px; width: 10px; border-radius: 5px; }
}
@keyframes loadingAnim5 {
    0% { height: 10px; width: 10px; border-radius: 5px; }
    50% { height: 20px; width: 8px; border-radius: 4px; }
    90% { height: 10px; width: 10px; border-radius: 5px; }
}
```

![](https://github.com/gafish/gafish.github.com/raw/master/images/Jietu20190704-090944.gif)

### 4、最终样式

```css
.loading,
.loading > span {
    box-sizing: border-box;
}
.loading {
    font-size: 0;
    margin: auto;
    position: absolute;
    top: 0; left: 0; bottom: 0; right: 0;
    width: 110px;
    height: 75px;
    line-height: 75px;
    text-align: center;
}

.loading > span {
    display: inline-block;
    width: 22px;
}

.loading > span::after {
    content: '';
    display: inline-block;
    width: 10px;
    height: 10px;
    border-radius: 5px;
    vertical-align: middle;
    background-image: linear-gradient(0deg, #00F4AA 0%, #0E85FF 100%);
}
    
.loading > span:nth-child(1)::after { animation: loadingAnim1 1s infinite; }
.loading > span:nth-child(2)::after { animation: loadingAnim2 1s infinite; }
.loading > span:nth-child(3)::after { animation: loadingAnim3 1s infinite; }
.loading > span:nth-child(4)::after { animation: loadingAnim4 1s infinite; }
.loading > span:nth-child(5)::after { animation: loadingAnim5 1s infinite; }

/*
* Animation
*/
@keyframes loadingAnim1 {
    0% { height: 10px; width: 10px; border-radius: 5px; }
    10% { height: 20px; width: 8px; border-radius: 4px; }
    50% { height: 10px; width: 10px; border-radius: 5px; }
}
@keyframes loadingAnim2 {
    0% { height: 10px; width: 10px; border-radius: 5px; }
    20% { height: 38px; width: 8px; border-radius: 4px; }
    60% { height: 10px; width: 10px; border-radius: 5px; }
}
@keyframes loadingAnim3 {
    0% { height: 10px; width: 10px; border-radius: 5px; }
    30% { height: 75px; width: 8px; border-radius: 4px; }
    70% { height: 10px; width: 10px; border-radius: 5px; }
}
@keyframes loadingAnim4 {
    0% { height: 10px; width: 10px; border-radius: 5px; }
    40% { height: 38px; width: 8px; border-radius: 4px; }
    80% { height: 10px; width: 10px; border-radius: 5px; }
}
@keyframes loadingAnim5 {
    0% { height: 10px; width: 10px; border-radius: 5px; }
    50% { height: 20px; width: 8px; border-radius: 4px; }
    90% { height: 10px; width: 10px; border-radius: 5px; }
}
```

## 最终效果展示

![](https://github.com/gafish/gafish.github.com/raw/master/images/Jietu20190704-093059.gif)

- [查看第一版的在线Demo](http://gafish.github.io/demo/loading.html)
- [查看第二版优化后的在线Demo](http://gafish.github.io/demo/loading2.html)