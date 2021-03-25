var webpack = require("webpack");
module.exports = {
 
  pages: {
    index: {
      entry: "src/main.js",
      template: "public/index.html",
      filename: "index.html",
      title: "YESMAN Photography Studio",
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
