const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

class HtmlScriptEntryWebpackPlugin {
  apply(compiler) {
    compiler.hooks.compilation.tap('HtmlScriptEntryWebpackPlugin', (compilation) => {
      HtmlWebpackPlugin.getHooks(compilation).afterTemplateExecution.tapAsync('HtmlScriptEntryWebpackPlugin', (data, cb) => {
        data.headTags.forEach((item) => {
          if (item.tagName === 'script') {
            const pkgName = require(path.join(process.cwd(), './package.json')).name;
            const reg = new RegExp(`/${pkgName}.js$`, 'g');
            if (item.attributes && item.attributes.src && item.attributes.src.match(reg)) {
              item.attributes.entry = true;
            }
          }
        });
        cb(null, data);
      });
    });
  }
}


module.exports = HtmlScriptEntryWebpackPlugin;
