# 参考阅读

- [https://www.freecodecamp.org/news/what-is-the-doctype-declaration-in-html/](https://www.freecodecamp.org/news/what-is-the-doctype-declaration-in-html/)

HTML 文档类型声明，也称为DOCTYPE ，是每个 HTML 或 XHTML 文档中所需的第一行代码。 DOCTYPE声明是向 Web 浏览器指示该页面是用什么版本的 HTML 编写的。这确保了不同 Web 浏览器以相同的方式解析该网页。

## 一般有几种`DOCTYPE`文档类型

`IE5.5` 发明了文档模式的概念 `doctype`

最初：混杂模式 + 标准模式
后来：+准标准模式

| 混杂模式    |                        标准模式                      | 准标准模式                  |
| ----------- | -------------------------------------------- | --------------------- |
| 省略doctype        |                              |        Transitional         Frameset        |

- HTML 4.01 规定了三种文档类型：Strict、Transitional 以及 Frameset。
- XHTML 1.0 规定了三种 XML 文档类型：Strict、Transitional 以及 Frameset。
- Standards （标准）模式（也就是严格呈现模式）用于呈现遵循最新标准的网页，
- Quirks（包容）模式（也就是松散呈现模式或者兼容模式）用于呈现为传统浏览器而设计的网页。
