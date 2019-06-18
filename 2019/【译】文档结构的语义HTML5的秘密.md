# 【译】文档结构的语义HTML5的秘密

原文链接：https://www.semrush.com/blog/semantic-html5-guide/

![](https://cdn.semrush.com/blog/static/media/ed/2c/ed2ca17e0061f8f474356b7d8059042e/resize/885x-/blogheaderhtml5-01-01.png)

## 什么是语义HTML5？

如果您对HTML有所了解，您就会知道HTML标签（大部分）用于格式化内容 - 这些标签告诉浏览器如何在页面上显示内容。它们没有说明它们包含的内容类型或内容在页面中扮演的角色。

语义HTML5通过定义特定标记来明确指出这些标记所包含的内容所扮演的角色，从而解决了这一缺点。这些明确的信息有助于Google和Bing等机器人/抓取工具更好地了解哪些内容很重要，哪些是辅助内容，哪些内容适用于导航等等。通过向您的网页添加语义HTML标记，您可以提供其他信息，以帮助Google和Bing了解网页不同部分的角色和相对重要性。

### 例子

![](https://cdn.semrush.com/blog/static/media/f3/8a/f38aa034ef62d1d9c2f43ed6c9ff54ef/resize/1620x158/div-span.webp)

    div和span标签。非语义/通用。

这些是非语义HTML元素的示例。它们仅作为持有者向浏览器传达应如何显示内容。它们不提供有关其包含的内容在页面上播放的角色的信息。

![](https://cdn.semrush.com/blog/static/media/0c/13/0c13b1127055b093f26146e0481e6a8d/resize/1620x158/semantic-html5-tags.webp)

    语义标签的示例。

这些是语义元素。他们清楚地定义了它们包含的内容的作用。

## 我为什么需要使用它？

对于视力正常的用户，通常很容易识别网页的各个部分。标题，菜单和主要内容都是立即显而易见的。现在想象你是盲人。

Google和Bing的机器人（爬虫）即使不是盲人，也会严重视障。对于他们来说，视觉线索非常难以看到和理解。

他们需要你的帮助。如果您能够成功地与Google和Bing通信，告诉它们该页面的哪一部分是标题，页脚和哪个用于导航，他们会感谢您。最重要的是，通过告诉他们哪个是最重要的内容，您可以给他们一个明确的指示来确定该内容的优先级。

![](https://cdn.semrush.com/blog/static/media/7c/8b/7c8bb66dacda5cd1ab33e2481adf050a/resize/1770x1332/initial-content-no-markup-kalicube.webp)

    这是我们的页面。

使用语义HTML5本身不会彻底改变您的SEO性能（抱歉！）。如您所知，成功的搜索引擎优化是许多，许多，许多小细节的累积。这是一些小细节，可以提高Google和Bing对您的内容的理解（以及对他们理解的信心），这将有助于您的SEO工作。

展望未来，随着SEO在未来几年的发展，与这些机器的明确和一致的沟通将成为您的SEO / AEO策略的两个基石之一（见下文）。

## 它是什么样子的？

语义HTML标记的示例包括`<nav>`，`<footer>`和`<section>`。可以使用更多语义HTML5标记（例如`<blockquote>`和`<em>`），但在本文中，我只关注将页面内容划分为基本部分所需的那些语义HTML标记。

可以使用以下HTML5标记代替`<div>`标记，将页面内容分解为已识别的部分，每个部分都可以完成特定的角色。可以想象，Google和Bing这样的机器就是这样。

![](https://cdn.semrush.com/blog/static/media/4e/f5/4ef50b3289c4454e8d99d9b063ee2d0f/resize/1618x868/7-semantic-html5-tags.webp)

    我们将在本文中使用的语义HTML5标记。

这种明确的划界以及角色对内容的每个部分的明确归属使得页面更加清晰，更容易为Google和Bing正确编制索引。

注意，由于这些标签的行为与`<div>`标签完全相同，因此可以简单地替换页面中的现有`<div>`而不影响布局。在很多情况下，实现语义HTML5就像找到正确的`<div>`和</ div>对并替换它们一样简单。

## 语义HTML5的示例

### 超简单语义HTML5示例：

在这里，我们简单地定义了页面的每个部分扮演的角色。当您开始应用HTML5时，这是一个安全的起点 - header(标题), nav(导航), main(主要内容), footer(页脚)。

![](https://cdn.semrush.com/blog/static/media/d6/d9/d6d954688cef6e156a701ea1d763f047/resize/1770x1332/basic-semantic-html5-markup-main-kalicube.webp)

    包含最重要元素的超级简单示例：页眉，页脚，导航和主要内容

**最好是拥有一个100％正确的超级简单实现，而不是一个不正确的复杂实现。**

不准确的实现会发送冲突和混乱的信号，这会使事情变得更糟，而不是更好。

在与Google和Bing的沟通中，简单而正确的实施已经向前迈出了一大步。不要过于雄心勃勃; 弄错了，你可能会创造出比你解决的问题更多的问题！

## 更复杂的例子

### 使用 sections 和 articles：

在这里，我们在主要内容中建立了一个层次结构。有一篇包罗万象的文章标识了主标签中的中心内容。这概述了该部分页面的主题。在该文章中，我们有多个子主题，用于开发由嵌套部分标识的主要主题。

![](https://cdn.semrush.com/blog/static/media/14/18/1418e48081a3421b2e0c4aaf062a83d7/resize/1770x1332/semantic-html5-markup-layout-kalicube.webp)

    请注意，设计（橙色块）不用于定义页面的语义区域。

**请注意，设计（橙色块）不用于定义页面的语义区域。看起来有点混乱，但很好地表明布局HTML和语义HTML5具有不同的角色。**

在现实世界中，语义标记通常遵循布局而不是此示例。一般规则：一个 section 是其他部分的一部分。一篇 article 是它自己的事情。

另请注意，这里我向页脚添加了导航部分。逻辑上，就像标题一样，页脚包含导航元素。

## 相关的旁白（Aside）

![](https://cdn.semrush.com/blog/static/media/62/de/62de85ae40932e6d41e2966b3af3ca8e/resize/1770x1332/semantic-html5-markup-related-aside-kalicube.webp)

在这里，我们在主要内容文章中添加了两条直接相关的内容。使用旁白（asides），我们指出相关内容（aside）是可选的。内容的主要部分可以在没有 aside 的情况下显示，并且仍然可以理解。

## 间接相关的旁白（Aside）

![](https://cdn.semrush.com/blog/static/media/5d/18/5d181389b833eea362b97555f575fae6/resize/1770x1332/semantic-html5-markup-unrelated-aside-kalicube.webp)

注意：aside 不必是主要内容旁边的侧边栏。它还可以用于包含标题，文本和指向其他页面的链接的主要内容下方的块

在这里，我们在主要内容文章之外确定了页面的一些间接相关内容。在这里，我们指出旁边的内容与主要文章没有直接关系。

**这足以满足大多数需求。**

## 我们的最终版本

![](https://cdn.semrush.com/blog/static/media/cf/a3/cfa391b0c6961710afe56a82e1b26ea0/resize/1770x1332/full-semantic-html5-markup-ok-kalicube.webp)

    这是非常好的！

## 有用的提示

### Section vs. Article

关于这一点有很多讨论。关于 sections 和 articles 没有固定的规则，它们的实现非常灵活。它们或多或少相同，并且大多数时候可以互换使用。确保合乎逻辑且一致。

**个人提示**：我发现内容的 article 中的嵌套 sections 既适用于机器，也适用于人类（HTML代码对于开发人员来说更容易阅读）。

![](https://cdn.semrush.com/blog/static/media/38/0c/380c46f73bebcf7a8e31639cca4ea905/resize/1060x940/article-sections.webp)

### 嵌套元素

元素可以嵌套其他元素。例如，一篇 article 可以拥有自己的`<header>`，`<footer>`，`<h1>`（如上所示），甚至`<nav>`（锚链接，也是一个很好的例子）。我没有举例说明这种“超级嵌套”，并且有一个原因：这是一个SEO博客，从SEO的角度来看，推动语义HTML5的逻辑并没有真正的好处。

**如上所述，出于搜索引擎优化的目的，您应该专注于提供一个坚实，简单的结构。**

## 什么不该做

只是一个警告 - 我已经看到许多网站使用视觉设计作为HTML5实施的指南。如下所示，这不是HTML5的语义设计。

![](https://cdn.semrush.com/blog/static/media/41/a1/41a1dbc3c1a327d2fed23b518904a74c/resize/1770x1332/bad-example-semantic-html5-kalicube.webp)

    语义HTML5不适用于设计。

这个（非常典型）示例简单地复制了视觉布局。更糟糕的是，这表明该页面包含4个不同的主题，而不是一个主题和3个子主题。明确向机器提供误导性信息将对其理解产生负面影响。

## 下一步？

在您的网页上实施语义HTML5将改善您与Google和Bing的沟通。他们都想了解您的网站是什么。他们都希望你用他们的语言清楚地沟通，他们都希望你教育他们。做吧。

### 通讯

与机器的通信（HTML5具有重要作用）是长期SEO策略的两大支柱之一，它将在我们需要针对答案引擎进行优化的世界中取得成功。你可以做很多事情来改善沟通。语义HTML5就是其中之一。架构结构化标记是另一种。[这是一篇关于此的文章](https://www.semrush.com/blog/schema-markup-for-company-corporations/)。

### 可信性

第二个支柱是可信度。您还可以做很多事情来提高自己的可信度。

![](https://cdn.semrush.com/blog/static/media/c1/a6/c1a6bdf521a4794e94a0d8009a080373/resize/860x350/communication-credibility.webp)

    沟通+信誉=制胜战略。

### 沟通+信誉

所有SEO（和AEO）都归结为沟通和可信度。我将继续在SEMrush上定期撰写有关改善沟通的技巧以及Google和Bing的可信度（顺便说一句，Bing即将重新回归）。


### 结束时：SEO的良好语义HTML5标记的提醒

结构，重要性，角色和层次结构是人类通常从设计/布局中本能地理解的东西。正确使用正确的语义HTML标签代替`<div>`只会使机器更容易理解。

![](https://cdn.semrush.com/blog/static/media/8c/d4/8cd4a96f3d98566613d4100fe2a23f9c/resize/1770x1004/visual-robot-html-kalicube.webp)
