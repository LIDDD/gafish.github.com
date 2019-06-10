
## 为什么要做 HTML5 语义化

HTML5的主要进步之一是引入了一组标准化的语义元素。

术语“语义”指的是单词或事物的含义，因此”语义元素“是用于以更有意义的方式标记文档结构的元素，这种方式可以清楚地表明它们的用途和它们在文件中服务的目的是什么。而且重要的是，由于它们是标准化的，定义文档的这些元素可以被每个人使用并理解，包括机器人。

在web无障碍开发领域，给视障用户使用的屏幕阅读器是视障群体访问网络的必备工具，合理的 HTML5 语义化元素，会让屏幕阅读器正确的理解网页的内容，从而以最为合适的方式朗读。

站在开发者的角度，写出符合 HTML5 语义化的结构，也是显示我们职业素养的一种方式，最为重要的是这样的代码自带翻译，比如下面的div结构，为了让开发者明白div的含义，我们必须在class命名上下功夫。

```
<div class="header">
    <h1>Super duper best blog ever</h1>
    ...
</div>
<div class="main">
    <h2>Why you should buy more cheeses than you currently do</h2>
    ...
</div>
<div class="footer">
    Contact us!
    <div class="contact-info">this.is.us@example.com</div>
</div>
```

而如果采用语义化元素，结构一目了然，不管是日后维护还是交接给他人，都是件轻松的事情。

```
<header>
    <h1>Super duper best blog ever</h1>
    ...
</header>
<main>
    <h2>Why you should buy more cheeses than you currently do</h2>
    ...
</main>
<footer>
    Contact us!
    <div class="contact-info">this.is.us@example.com</div>
</footer>
```

在讲解如何更好的做语义化之前，先来回顾一下 HTML5 有哪些元素（根据 MDN 资料整理）

## HTML5 元素大全

### 文档元素

|||||
|-|-|-|-|
| [html] | HTML 文档中最外层的元素，也可称为根元素。 |

### 文档元数据

|||||
|-|-|-|-|
| [head] | 表示文档的头部 | [title] | 用来定义文档的标题 |
| [base] | 为页面上的所有的相对链接规定默认 URL 或默认目标 | [link] | 定义文档与外部资源的关系 |
| [meta] | 提供了 HTML 文档的元数据 | [style] | 用于表示文档所使用的样式 |

### 区块

|||||
|-|-|-|-|
| [body] | 表示文档的内容 | [article] | 表示文档、页面、应用或网站中的独立结构 |
| [section] | 表示文档中的一个区域（或节） | [nav] | 描绘一个含有多个超链接的导航栏区域 |
| [aside] | 表示一个和其余页面内容几乎无关的部分 | [h1-h6] | 标题(Heading)元素呈现了六个不同的级别的标题，`<h1>` 级别最高，而 `<h6>` 级别最低 |
| [footer] | 表示最近一个章节内容或者根节点（sectioning root ）元素的页脚 | [header] | 用于展示介绍性内容 |

### 内容分组

|||||
|-|-|-|-|
| [p] | 表示文本的一个段落 | [address] | 表示其中的 HTML 提供了某个人或某个组织（等等）的联系信息 |
| [hr] | 表示段落级元素之间的主题转换 | [pre] | 表示预定义格式文本 |
| [blockquote] | 表示其中的文字是引用内容 | [ol] | 表示多个有序列表项 |
| [ul] | 表示一个内可含多个元素的无序列表或项目符号列表 | [li] | 表示列表里的条目 |
| [dl] | 表示一个包含术语定义以及描述的列表 | [dt] | 用于在一个定义列表中声明一个术语 |
| [dd] | 用来指明一个描述列表元素中一个术语的描述 | [figure] | 代表一段独立的内容 |
| [figcaption] | 与其相关联的图片的说明/标题 | [main] | 呈现了文档的 `<body>` 或应用的主体部分 |
| [div] | 通用型的流内容容器，它应该在没有任何其它语义元素可用时才使用 |

### 文本级语义

|||||
|-|-|-|-|
| a | - | em | - |
| strong | - | small | - |
| s | - | cite | - |
| q | - | dfn | - |
| abbr | - | ruby | - |
| rb | - | rt | - |
| rtc | - | rp | - |
| data | - | time | - |
| code | - | var | - |
| samp | - | kbd | - |
| su | - | sup | - |
| i | - | b | - |
| u | - | mark | - |
| bdi | - | bdo | - |
| span | - | br | - |
| wbr | - |

### 修改记录

|||||
|-|-|-|-|
| ins | - | del | - |

### 嵌入内容

|||||
|-|-|-|-|
| picture | - | source | - |
| img | - | iframe | - |
| embed | - | object | - |
| param | - | video | - |
| audio | - | track | - |
| map | - | area | - |
| math | - | svg | - |

### 表格数据

|||||
|-|-|-|-|
| table | - | caption | - |
| colgroup | - | col | - |
| tbody | - | thead | - |
| tfoot | - | tr | - |
| td | - | th | - |

### 表单

|||||
|-|-|-|-|
| form | - | label | - |
| input | - | button | - |
| select | - | datalist | - |
| optgroup | - | option | - |
| textarea | - | output | - |
| progress | - | meter | - |
| fieldset | - | legend | - |

### 交互元素

|||||
|-|-|-|-|
| details | - | summary | - |
| dialog | - |

### 脚本元素

|||||
|-|-|-|-|
| script | - | noscript | - |
| template | - | canvas | - |
| slot | - |

## 符合语义化的基本布局


## 一个完整的符合语义化的页面结构

## 常见错误用法

## 参考资料

- https://www.w3cschool.cn/html5/
- https://juejin.im/post/5cb1a7af5188251b0c653736


[html]: https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/html
[head]: https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/head
[title]: https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/title
[base]: https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/base
[link]: https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/link
[meta]: https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/meta
[style]: https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/style
[body]: https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/body
[article]: https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/article
[section]: https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/section
[nav]: https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/nav
[aside]: https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/aside
[h1-h6]: https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/Heading_Elements
[footer]: https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/footer
[header]: https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/header
[p]: https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/p
[address]: https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/address
[hr]: https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/hr
[pre]: https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/pre
[blockquote]: https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/blockquote
[ol]: https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/ol
[ul]: https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/ul
[li]: https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/li
[dl]: https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/dl
[dt]: https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/dt
[dd]: https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/dd
[figure]: https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/figure
[figcaption]: https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/figcaption
[main]: https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/main
[div]: https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/div
[a]: https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/a
[em]: https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/em
[strong]: https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/strong
[small]: https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/small
[s]: https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/s
[cite]: https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/cite
[q]: https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/q
[dfn]: https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/dfn
[abbr]: https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/abbr
[ruby]: https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/ruby
[rb]: https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/rb
[rt]: https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/rt
[rtc]: https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/rtc
[rp]: https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/rp
[data]: https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/data
[time]: https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/time
[code]: https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/code
[var]: https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/var
[samp]: https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/samp
[kbd]: https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/kbd
[su]: https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/su
[sup]: https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/sup
[i]: https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/i
[b]: https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/b
[u]: https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/u
[mark]: https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/mark
[bdi]: https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/bdi
[bdo]: https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/bdo
[span]: https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/span
[br]: https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/br
[wbr]: https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/wbr
[ins]: https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/ins
[del]: https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/del
[picture]: https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/picture
[source]: https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/source
[img]: https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/img
[iframe]: https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/iframe
[embed]: https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/embed
[object]: https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/object
[param]: https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/param
[video]: https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/video
[audio]: https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/audio
[track]: https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/track
[map]: https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/map
[area]: https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/area
[math]: https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/math
[svg]: https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/svg
[table]: https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/table
[caption]: https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/caption
[colgroup]: https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/colgroup
[col]: https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/col
[tbody]: https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/tbody
[thead]: https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/thead
[tfoot]: https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/tfoot
[tr]: https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/tr
[td]: https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/td
[th]: https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/th
[form]: https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/form
[label]: https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/label
[input]: https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/input
[button]: https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/button
[select]: https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/select
[datalist]: https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/datalist
[optgroup]: https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/optgroup
[option]: https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/option
[textarea]: https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/textarea
[output]: https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/output
[progress]: https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/progress
[meter]: https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/meter
[fieldset]: https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/fieldset
[legend]: https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/legend
[details]: https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/details
[summary]: https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/summary
[dialog]: https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/dialog
[script]: https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/script
[noscript]: https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/noscript
[template]: https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/template
[canvas]: https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/canvas
[slot]: https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/slot


## 文章内容碎片

### 标题元素使用要点：

不要为了减小标题的字体而使用低级别的标题， 而是使用 CSS font-size 属性。
避免跳过某级标题：始终要从 `<h1>` 开始，接下来依次使用 `<h2>` 等等。
使用 `<section>` 元素时，为了方便起见，你应该考虑避免在同一个页面上重复使用 `<h1>`，`<h1>` 应被用于表示页面的标题，其他的标题当从 `<h2>` 开始。在使用 section 时，应当为每个 section 都使用一个 `<h2>`。详情请参考 Defining sections in Using HTML sections and outlines。