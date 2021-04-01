var webpack = require("webpack");
module.exports = {
  pages: {
    index: {
      entry: "src/main.js",
      template: "public/index.html",
      filename: "index.html",
      title: "Yes man專業攝影工作室-兒童寫真,孕婦寫真,新生兒到府拍攝",
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
