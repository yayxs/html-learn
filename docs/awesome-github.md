```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body></body>
</html>
```

从头开始学`HTML` 的话，可以先去 `github` 仓库看一下，根据 `star` 数，分析一下优秀的开源项目。前提需要给你的**浏览器** 安装一个翻译的插件，有助于理解全英文的仓库

## microsoft/Web-Dev-For-Beginners

[microsoft/Web-Dev-For-Beginners](https://github.com/microsoft/Web-Dev-For-Beginners)

[https://microsoft.github.io/Web-Dev-For-Beginners/#/3-terrarium/1-intro-to-html/README](https://microsoft.github.io/Web-Dev-For-Beginners/#/3-terrarium/1-intro-to-html/README)

![](https://microsoft.github.io/Web-Dev-For-Beginners/sketchnotes/webdev101-html.png)

以为任务的形式，介绍了 `DocType` 和 `html tags` 、`head` `body` 等等，根据此页面能够新建一个简单的`html` 文档

[https://microsoft.github.io/Web-Dev-For-Beginners/#/7-bank-project/1-template-route/README](https://microsoft.github.io/Web-Dev-For-Beginners/#/7-bank-project/1-template-route/README)

这篇讲的是如何使用 `<template id="dashboard">`标签和使用 js 脚本

## thedaviddias/Front-End-Checklist

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

这个清单不仅仅如此，是一份很好开始`web`的清单

## joshbuchea/HEAD

能在 HEAD 列表中找到 HTML 文档`<head>`标签内所有可配置的属性。

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

通过原生的代码，写出常见的效果，可以作为练习

[https://github.com/bradtraversy/50projects50days](https://github.com/bradtraversy/50projects50days)

## dexteryy/spellbook-of-modern-webdev

这个项目是一个册子，其中包含`html`的内容。是一份常用的链接和学习资源。

## bradtraversy/vanillawebprojects

一些很棒的使用原生 html 写的案例

## learning-zone/website-templates

一些 web 网站的模板

## whatwg/html

我曾画过一段时间看这份`whatwg`。这是中文翻译 [https://whatwg-cn.github.io/html/](https://whatwg-cn.github.io/html/)

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

1、关于 htmld 的语法，你可以直接访问`MDN` 或者 [https://www.codecademy.com/learn/learn-html](https://www.codecademy.com/learn/learn-html)

2、了解`html`的基础标签

- [https://www.elated.com/first-10-html-tags/](https://www.elated.com/first-10-html-tags/)

3、`form标签` [https://web.dev/learn/forms/](https://web.dev/learn/forms/)

# zxuqian/html-css-examples

这个项目是一下`html css` 的案例。
