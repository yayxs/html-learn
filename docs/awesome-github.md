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
