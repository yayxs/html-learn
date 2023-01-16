HTML，即超文本标记语言，是网络的 "骨架"。如果说 CSS "装扮 "了你的 HTML，而 JavaScript 为它带来了活力，那么 HTML 就是你的网络应用的主体。HTML 的语法甚至反映了这个想法，因为它包括 "头"、"身 "和 "脚 "标签。

`DocType`

```html
<!DOCTYPE html>
```

一个 HTML 文件的第一行是它的 doctype。你需要把这一行放在文件的最上面，这有点令人吃惊，但它告诉老的浏览器，浏览器需要按照当前的 html 规范，以标准模式渲染页面。

[MDN 怪异模式和标准模式](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Quirks_Mode_and_Standards_Mode)

`head`

```html
<head>
  <!-- 元数据 -->
  <!-- 页面采用什么编码 -->
  <meta charset="UTF-8" />
  <!-- 浏览器信息，包括x-ua-compatible，表示支持IE=edge浏览器。 -->
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <!-- 关于视口在加载时应该如何表现的信息。设置视口的初始比例为1，可以控制页面首次加载时的缩放级别。 -->
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <!-- 页面的标题 -->
  <title>Document</title>
</head>
```

一般来说，在编写 HTML 时，最好是使用有意义的 "语义"。那是什么意思呢？它意味着你使用 HTML 标签来代表它们被设计的数据或互动类型。例如，一个页面上的主要标题文本应该使用<h1>标签。

```html
<h1>this is h1</h1>
<h2>this is h2</h2>
<h3>this is h3</h3>
<h4>this is h4</h4>
<h5>this is h5</h5>
<h6>this is h6</h6>
<h7>123</h7>
<img src="https://avatars.githubusercontent.com/u/50107464?s=40&v=4" alt="" />
<em>强调一下</em>
```

`html` 中所有的语义化元素

- [html elements attributes](https://htmlreference.io/)
