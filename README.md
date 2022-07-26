## html-script-entry-webpack-plugin

## 使用
```shell
# install
npm install html-script-entry-webpack-plugin;
```
webpack:
```javascript
// webpack.config.js
const HtmlScriptEntryWebpackPlugin = require('html-script-entry-webpack-plugin')

{
	...
	plugins: [
	  new HtmlWebpackPlugin(),
	  new HtmlScriptEntryWebpackPlugin()
	]
	...
}

```

## 解决问题
当我们机遇import-html-entry去解决前端模块化的问题时(比如 `qiankun`)，加载html后需要知道那个脚本是我们入口文件

## 工作原理
基于`html-webpack-plugin`，在处理钩子`afterTemplateExecution`时根据`package.json`中`name`比较`headTags`下的脚本文件，为入口文件`scriptTag`添加`entry:true`,编译后html：
```html
<!DOCTYPE html>
<html lang="zh-cn">
  <head>
    <meta charset="utf-8" />
    <link rel="icon" href="/favicon.ico" />
    <meta name="viewport" content="width=device-width,initial-scale=1" />
    <meta name="theme-color" content="#000000" />
    <meta name="description" content="Web site created using create-react-app" />
    <link rel="apple-touch-icon" href="/logo192.png" />
    <link rel="manifest" href="/manifest.json" />
    <title>Document</title>
    <script defer="defer" src="/static/js/struct-app.js" entry></script>
  </head>
  <body>
    <noscript>You need to enable JavaScript to run this app.</noscript>
    <div id="root"></div>
  </body>
</html>

```