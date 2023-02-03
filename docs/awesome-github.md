```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>一些很棒的 html 仓库</title>
  </head>
  <body></body>
</html>
```

从头开始学`HTML` 的话，可以先去 `github` 仓库看一下，根据 `star` 数，分析一下优秀的开源项目。前提需要给你的**浏览器** 安装一个翻译的插件（我现在用的是 DeepL 翻译：阅读写作翻译器），有助于理解全英文的仓库。很多人推荐学习`html` 总是说什么不用花费太多时间。看一看 `mdn` 就好。还有就是 2 天时间就够了。看了这几天，有点感受

1、`mdn`的文档看起来有点枯燥；有的英文还没完全翻译过来，但它依然很棒
2、`html` 真的没有大家所说的那个简单
3、学习`html`是需要长期，慢慢了解，但是当我们接触框架之后，越来越少的机会接触 html 本身

看了一些`html` 的仓库，有几大类
1、基于`html` 的框架
2、web 开发的一些技能清单，其中包含`html` 部分
3、一些高级标签 `video` `canvas` `svg` 等等
4、还有一些 3D 相关的内容比如：`d3`

## microsoft/Web-Dev-For-Beginners

[microsoft/Web-Dev-For-Beginners](https://github.com/microsoft/Web-Dev-For-Beginners)

[https://microsoft.github.io/Web-Dev-For-Beginners/#/3-terrarium/1-intro-to-html/README](https://microsoft.github.io/Web-Dev-For-Beginners/#/3-terrarium/1-intro-to-html/README)

![](https://microsoft.github.io/Web-Dev-For-Beginners/sketchnotes/webdev101-html.png)

以为任务的形式，介绍了 `DocType` 和 `html tags` 、`head` `body` 等等，根据此页面能够新建一个简单的`html` 文档

[https://microsoft.github.io/Web-Dev-For-Beginners/#/7-bank-project/1-template-route/README](https://microsoft.github.io/Web-Dev-For-Beginners/#/7-bank-project/1-template-route/README)

这篇讲的是如何使用 `<template id="dashboard">`标签和使用 js 脚本。在这里使用到了 `<template>` 标签

```html
<template id="login">
  <h1>Bank App</h1>
  <section>
    <a href="/dashboard">Login</a>
  </section>
</template>
```

- [https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/template](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/template)

## thedaviddias/Front-End-Checklist

[中文文档](https://github.com/JohnsenZhou/Front-End-Checklist)

以下标签属于 `meta tag`

`Doctype` 在页面的顶部

`<meta charset="UTF-8">` ：告知使用页面采用什么编码，文档设置为 `utf-8` 编码

`<meta name="viewport" content="width=device-width, initial-scale=1.0">` 关于视口在加载时应该如何表现的信息。设置视口的初始比例为 1，可以控制页面首次加载时的缩放级别
`<title>Document</title>`：页面标题的内容可能对搜索引擎优化（SEO）具有重要意义

`favicon.png` 推荐 32px \* 32px 的 png 格式的；你可以使用[https://realfavicongenerator.net/](https://realfavicongenerator.net/) 这个网站可以免费生成 ico

那么`favicon.ico`应该是什么尺寸？

```html
<link rel="icon" type="image/png" href="/favicon-16x16.png" sizes="16x16" />
<link rel="icon" type="image/png" href="/favicon-32x32.png" sizes="32x32" />
<link rel="icon" type="image/png" href="/favicon-96x96.png" sizes="96x96" />
```

更多可以参阅这篇文章 [https://css-tricks.com/favicon-quiz/](https://css-tricks.com/favicon-quiz/)
应该使用语义化的 html 标签

这个清单不仅仅如此，是一份很好开始`web`的清单以及一些最佳做法：

1、`https://htmlreference.io/` html 所有的标签，下文会提及。
2、如果你使用带有 target="\_blank "的外部链接，你的链接应该有一个 rel="noopener "属性，以防止标签被截取。
3、字体相关：所有现代浏览器都支持 WOFF、WOFF2 和 TTF
如何使用字体 [https://css-tricks.com/snippets/css/using-font-face-in-css/](https://css-tricks.com/snippets/css/using-font-face-in-css/)

4、`Images` 图片

- 图片需要压缩，工作中比较常用 [https://tinypng.com/](https://tinypng.com/)
- 使用`srcset` 设置不同的大小

## joshbuchea/HEAD

能在 HEAD 列表中找到 HTML 文档`<head>`标签内所有可配置的属性。当我发现这个仓库的时候，简直太酷了。

- `meta charset` 定义了网站的编码，utf-8 是标准的
- `meta name="viewport"` 移动响应有关

在 UTF-8 空间内的所有字符（如表情符号）都能被正确呈现。

```html
<meta charset="utf-8" />
```

为文件中的所有相对 URL 设置基础 URL

```html
<base href="https://example.com/page.html" />
```

这是完整的中文地址 [https://github.com/Amery2010/HEAD](https://github.com/Amery2010/HEAD)

## bradtraversy/50projects50days

通过原生的代码，写出常见的效果，可以作为练习。

[https://github.com/bradtraversy/50projects50days](https://github.com/bradtraversy/50projects50days)
这些项目 50 个独特的小项目来磨练你的 HTML、CSS 和 JavaScript 技能。当然了主要是 `html`。
举个例子：
一个原始的 `button` 按钮

```html
<button class="btn" id="prev" disabled>上一步</button>
```

可以通过 css 的设置给人一种动态的感觉

```css
.btn:active {
  transform: scale(0.98);
}
```

## dexteryy/spellbook-of-modern-webdev

这个项目是一个册子，其中包含`html`的内容。是一份常用的链接和学习资源。

## bradtraversy/vanillawebprojects

一些很棒的使用原生 html 写的案例

## learning-zone/website-templates

一些 web 网站的模板

## whatwg/html

我曾花过一段时间看这份`whatwg`。这是中文翻译 [https://whatwg-cn.github.io/html/](https://whatwg-cn.github.io/html/)。
分为几个版本
1、多页版本
2、单页版本
3、PDF 版本
看看目录：

- **介绍章节**：介绍了怎么使用这个文档，以及规范性的内容。还讲了 `HTML vs XML syntax` 的不同（这在面试中频繁被问起）
- **一些公共的部分**：讲了 html 中的数字、颜色、`URL` 通用的 DOM 接口等等
  等等

## GoogleChrome/web.dev

在这里 [https://web.dev/learn/html/](https://web.dev/learn/html/)

## diegocard/awesome-html5

一些与`html`有关的资源

## jgthms/html-reference

HTML Reference: a free guide to all HTML5 elements and attributes

这个项目提供了一份 `html5` 的元素和属性，以`<a>` 标签为例子。

[https://htmlreference.io/element/a/](https://htmlreference.io/element/a/)

## MilenaCarecho/30diasDeCSS

挑战在 30 天内写 30 个小项目

# sadanandpai/frontend-mini-challenges

一些前端的挑战

# georgebrata/html-templates

# bradtraversy/design-resources-for-developers#html--css-templates

一些精美的模板

# mdo/code-guide

**这个项目讲的是编码的一些规范**，其中在写`html` 的时候有一些规范。这样写更好！

1、关于自闭合标签的结尾的 `/` ，[html 规范 HTML5 spec](https://html.spec.whatwg.org/multipage/syntax.html#syntax-start-tag) 不要在自闭合（self-closing）元素的尾部添加斜线，就像 `<img>` ，在规范中可选的。

```html
<img src="images/company-logo.png" alt="Company" />
```

2、属性使用双引号

```html
<h1 class="hello-world">Hello, world!</h1>
```

3、标签不要大写，即便是 doctype 标签。

4、关于 `html` 文档的语言表，可以阅读 [https://www.sitepoint.com/iso-2-letter-language-codes/](https://www.sitepoint.com/iso-2-letter-language-codes/)

5、IE 的兼容模式

IE 支持通过特定的 <meta> 标签来确定绘制当前页面所应该采用的 IE 版本。除非有强烈的特殊需求，否则最好是设置为 edge mode，从而通知 IE 采用其所支持的最新的绘制模式。

```html
<meta http-equiv="X-UA-Compatible" content="IE=edge" />
```

6、引入 CSS 和 JavaScript 文件

根据 HTML5 规范，在引入 CSS 和 JavaScript 文件时一般不需要指定 type 属性，因为 text/css 和 text/javascript 分别是它们的默认值。

## andreasbm/web-skills

**这个项目对作为一个网络开发人员所要学习的有用技能的一个可视化概述**
网络技能是对作为一个网络开发人员所要学习的有用技能的一个可视化概述。它对刚开始学习网络开发的人和已经在这个领域工作多年并想学习新东西的人都很有用。作为一个初学者，我鼓励你不要把这个网站看作是你需要知道的东西的最终清单，而要看作是你能学到什么和从哪里开始的例子。这些技能是根据我建议你采取的学习途径按时间顺序排列的，但你可以自由跳转。

1、关于 htmld 的语法，你可以直接访问`MDN` 或者 [https://www.codecademy.com/learn/learn-html](https://www.codecademy.com/learn/learn-html)

2、了解`html`的基础标签

- [https://www.elated.com/first-10-html-tags/](https://www.elated.com/first-10-html-tags/)

3、`form标签` [https://web.dev/learn/forms/](https://web.dev/learn/forms/)

4、`svg` 标签：[https://svgontheweb.com/](https://svgontheweb.com/)

经过通篇的阅读，发现是把某个垂直的内容拆出来了。但同时出现的网站：

1、`mdn`

2、[https://www.codecademy.com/catalog/language/html-css](https://www.codecademy.com/catalog/language/html-css)

3、[https://web.dev/learn/forms/](https://web.dev/learn/forms/)

4、[https://dev.to/](https://dev.to/)

5、[https://www.w3schools.com/css/css_specificity.asp](https://www.w3schools.com/css/css_specificity.asp)

6、[https://htmldom.dev/](https://htmldom.dev/)

# zxuqian/html-css-examples

这个项目是一下`html css` 的案例。
