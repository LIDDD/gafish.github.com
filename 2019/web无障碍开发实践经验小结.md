# web无障碍开发实践经验小结

## 前言：

最近在项目的web无障碍改造过程中，踩了一些坑，写个文章来一次小结。
本文直接略过web无障碍开发的意义和学习过程，直接进入开发实践阶段。

## 工具篇：

### Chrome DevTools - Audits（Lighthouse）

 Chrome 开发者工具已经集成了 Lighthouse ，可以用它来做站点首屏的可访问性检测

 ![](https://img.alicdn.com/tfs/TB1vqW.aL1G3KVjSZFkXXaK4XXa-1466-1148.jpg)

### HTML_CodeSniffer

检查您的HTML代码是否符合可访问性编码标准，可以用来在检测单页应用在交互操作时的可访问性，[官网](http://squizlabs.github.io/HTML_CodeSniffer/)

![](https://img.alicdn.com/tfs/TB1G_LXaRaE3KVjSZLeXXXsSFXa-654-600.jpg)

### WCAG Luminosity Contrast Ratio Analyzer

页面文字对比度分析chrome插件，可以用来对检测结果中不符合对比度要求的部分进行再检测，并给出改进建议，[安装](https://chrome.google.com/webstore/detail/wcag-luminosity-contrast/lllpnmpooomecmbmijbmbikaacgfdagi)

![](https://img.alicdn.com/tfs/TB1zS_XaQ5E3KVjSZFCXXbuzXXa-952-972.jpg)

### React-axe

React官方推荐使用 react-axe 来做开发过程中的实时检测，通过在控制台输出可访问性问题列表来及时改进可访问性。
(**多说一句：react-axe 是基于axe-core来开发的，而Lighthouse的可访问性检测也是基于axe-core**)
但经过实际测试，在简单的示例项目中，react-axe 可以运行的非常好，但在像店小蜜和阿里小蜜的项目中，运行非常不稳定，有时候间歇性会输出，有时候完全不输出，问题还需要时间排查。

![](https://img.alicdn.com/tfs/TB1o3u.aMaH3KVjSZFjXXcFWpXa-3136-1684.png)

### eslint-plugin-jsx-a11y

通过 eslint 插件的方式，在编译阶段或在编辑器中实时查看不符合可访问性的代码。

![](https://img.alicdn.com/tfs/TB1F3DcaRWD3KVjSZKPXXap7FXa-3360-2100.png)

## 流程篇：

### 第1步：首屏改造

通过 Chrome 开发者工具的 Audits，只勾选 Accessibility ，运行，得到页面首屏渲染的可访问性评分及改进点，这一步主要改造的有2点：

* HTML 标签使用是否规范
* 文案对比度是否符合可访问性要求

HTML使用规范主要指的是标签是否有语义，是否带有必要的属性，如：

    <a class=“button”>xxx</a>
    a标签作为按钮没有href属性，更合适的作法是使用button标签

    <img src=“…..” />
    img标签没有alt属性

关于对比度不达标，工具没有告诉我们要改成什么样的，还需要自己想办法，这里我们可以用到 WCAG Luminosity Contrast Ratio Analyzer 插件，通过对有问题的文案部分，通过获取文案颜色和背景色，它可以告诉你当前的对比度是多少，是否合格，建议文案颜色改成哪个色值，一般情况下按它的建议改就行了，如果实在拿不准可以找上设计师讨论是否合适。

关于对比度是否达标，还有一个小技巧，在开发者工具中，查看页面元素时，在提示框里会显示当前文案的对比度是否达标

![](https://img.alicdn.com/tfs/TB1bcvbaL1H3KVjSZFHXXbKppXa-750-402.jpg)

基本上到这里，首屏改造就差不多了，但我们的单页应用一般都是有各种复杂交互操作的，比如打开一个弹层，这时候要对增加弹层之后的页面进行改造，就要利用到 HTML_CodeSniffer，通过书签的方式打开，它会显示当前页面的问题列表，点进每个问题，还会显示问题如何解决，以前定位到问题元素位置。

官方的 HTML_CodeSniffer，每次打开时都要远程去加载一个js文件，所以打开时可能会比较慢，我正在计划把这个功能迁移到chrome插件，目前已经完成一部分，有需要的同学可以先用起来，[安装地址](https://chrome.google.com/webstore/detail/%E5%B0%8F%E8%9C%9Cweb%E6%97%A0%E9%9A%9C%E7%A2%8D%E6%A3%80%E6%B5%8B/lbdmdmikomieilpnlihfhianednecpcl?utm_source=chrome-ntp-icon)


### 第2步：键盘可访问性改造

完全通过键盘来访问页面，最基本的操作就是通过 tab 切换+回车来实现，所以我们要保证页面上，可以用鼠标操作的地方都要支持聚焦+onkeypress事件，

* 聚焦：通过设置tabindex=“0”，一个非焦点元素也可以被tab键捕获；
* onkeypress：只要设置了onClick事件的地方，同步加一个onKeyPress事件执行同样的操作；
* focus样式：很多时候我们会把focus时的样式设置为 outline:0; ，这严重影响键盘的可访问性，可行的做法有
    * 设置一个肉眼可见的聚焦样式效果；
    * 使用浏览器默认的outline样式； 
    * 给聚焦元素的父级或再往上的父级容器设置聚焦效果：:focus-within

### 第3步：屏幕阅读器可访问性改造

在Macos下，可以通过 command+F5 键快速打开 VoiceOver 工具，然后根据它的语音提示一步一步进入页面操作。
在Iphone下，通过 设置 / 通用 / 辅助功能 / VoiceOver，可以打开 VoiceOver 工具；
在Android下，通过上下音量键同时按3秒，可以打开 talkback；
正常情况下，屏幕阅读器会按顺序把它遇到的所有可读内容都读出来，试想一下，一个盲人用户访问你的网页，听到了一堆乱七八糟的内容，最终还是没明白你的网页到底是干嘛的，这是件很悲催的事情。
我们需要经过如下一些改造，让盲人用户更快的了解你的网页：

* 页面开始的位置设置一个锚点链接，直接定位到页面的主体内容区域，如 <a href=“#content”>跳到内容区域</a>，它对正常用户是隐藏的，这里有个问题，我们目前的单页应用多是用hash路由，这会让锚点失效，所以需要通过js实现焦点聚焦到主内容区域；
* 一些无意义的图片可以不让盲人用户知道，给这些图片设置 aria-hidden=“hidden”，屏幕阅读器会忽略这些图片；
* 有些内容中包括有html标签嵌套，比如 <div>今天是<b>星期三</b><div>，屏幕阅读器会分成两部分朗读，这时候可以设置一段专门给屏幕阅读器的文案，<div role=“option” aria-label=“今天是星期三，见到你真开心">今天是<b>星期三</b><div>
* 有些内容是列表型的，但我们用的不是ul之类的标签，我们希望屏幕阅读器把它当成一个列表来朗读，可以设置容器的角色是list，如 <div role=“list”> <div role=“listitem”>….</div>….</div>，盲人用户会听到这是一个列表。
* 图片按钮需要增加一个 aria-label 描述按钮的用途，如 <button aira-label=“添加图片”><img … ></div>

## 后记

通过以上这些工具和流程，基本上就可以完成一个网页70%的可访问性改造工作，当然，这个百分比的得出，是依据我在Mac下的开发与测试，实际上还有很多的场景是没有测试到，如windows，移动端，如何评判可访问性改造工作是否做的好，除了辅助检测工具给出的评分之外，其实真正的判断依据是各类障碍群体的实际操作是否体验好，理想很丰满，现实很骨感，作为开发者，我们需要追求尽力而为，而不是100%可访问性的目标。
