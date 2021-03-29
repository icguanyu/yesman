var webpack = require("webpack");
module.exports = {
 
  pages: {
    index: {
      entry: "src/main.js",
      template: "public/index.html",
      filename: "index.html",
      title: "Yes Man 專業攝影工作室",
    },
  },
  css: {
    loaderOptions: {
      scss: {
        prependData: `@import "~@/assets/scss/_color.scss";`,
      },
    },
  },
};
