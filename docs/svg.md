说`svg`的话，从现有项目的依赖包看一下 `svgo` 和 `svg-sprite-loader`。那么这两个包是做什么的用的呢？在 vue 的项目中找到 `vue.config.js`

```js
// at vue.config.js
config.module.rule('svg').exclude.add(resolve('src/assets/icons')).end()
config.module
  .rule('icons')
  .test(/\.svg$/)
  .include.add(resolve('src/assets/icons'))
  .end()
  .use('svg-sprite-loader')
  .loader('svg-sprite-loader')
  .options({
    symbolId: 'icon-[name]'
  })
  .end()
```

再看一下开源项目的针对`svg` 的依赖包 [https://github.com/PanJiaChen/vue-element-admin/blob/master/package.json](https://github.com/PanJiaChen/vue-element-admin/blob/master/package.json)

```js
"scripts": {

    "svgo": "svgo -f src/icons/svg --config=src/icons/svgo.yml",

  },
```

```js
 "devDependencies": {

    "svg-sprite-loader": "4.1.3",
    "svgo": "1.2.0",
  },
```

使用的时候就像 `<svg-icon icon-class="like" />`

1、SVG 优化器是一个基于 Node.js 的工具，用于优化 SVG 矢量图形文件。
2、`svg-sprite-loader` Webpack loader for creating SVG sprites.

## About SVG

SVG 意为可缩放矢量图形（Scalable Vector Graphics）与屏幕分辨率无关, 体积上能使用 Gzip 的方式压缩, 而且修改编辑都很方便。SVG 是一种 XML 语言，类似 XHTML

1、可以缩放 矢量图形
2、可以压缩、修改编辑
3、图形格式
4、svg 的优化：SVGO 是一个很棒的优化 SVG 的脚本工具。它会删除 SVG 中一切多余的属性
5、使用 svg

(1) `<img>` 元素 和 `<picture>` 元素
(2) 背景图: `background-image: url(bblogo.svg);`
(3)`Object`

```html
<object type="image/svg+xml" data="bblogo.svg">
  Your browser does not support SVGs
</object>
```

```xml
<svg
  version="1.1"
  baseProfile="full"
  width="300"
  height="200"
  xmlns="http://www.w3.org/2000/svg"
>
  <rect width="100%" height="100%" fill="red" />

  <circle cx="150" cy="100" r="80" fill="green" />

  <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">
    SVG
  </text>
</svg>
```

1、`svg` 是跟元素
2、`version="1.1"` `baseProfile="full"` SVG 2 不推荐使用 version 和 baseProfile 这两个属性。

3、`xmlns="http://www.w3.org/2000/svg"` 命名空间

4、`<rect` 矩形
5、`width height` 完全覆盖。
6、`fill red` 背景颜色是红色
7、`<circle` 圆形 ； `r=80` 半径；`cx 150` 向右偏移 150px ；`cy 100` 向下偏移 100px
8、`<text` 文字 ; `fill="white"` 文字白色 `text-anchor="middle"` 居中的锚点

## vscode plugin

在 vscode 中可以直接安装相关的预览插件，可以直接查看`svg` 的样式

```xml
<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid" width="32.282" height="28.563" viewBox="0 0 32.282 28.563">
  <defs>
    <style>
      .cls-1 {
        fill: #000;
        fill-rule: evenodd;
      }
    </style>
  </defs>

</svg>
```

其中 `width="32.282" height="28.563" viewBox="0 0 32.282 28.563"`

1、定义的画布尺寸 `32.282px x 28.563px` viewBox 属性定义了画布上可以显示的区域 从 (0,0) 点开始，32.282 宽\*28.563 高的区域。

## Link

- [https://svgontheweb.com/zh/](https://svgontheweb.com/zh/)
