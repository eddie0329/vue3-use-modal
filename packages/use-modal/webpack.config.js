/* eslint-disable @typescript-eslint/no-var-requires */
const { VueLoaderPlugin } = require("vue-loader");

module.exports = {
  mode: "development",
  stats: {
    errorDetails: true
  },
  entry: "./src/index.ts",
  output: {
    libraryTarget: '',
    umdNamedDefine: true,
    path: `${__dirname}/dist`,
    filename: "index.js",
  },
  module: {
    rules: [
      {
        test: /\.(tsx|ts)?$/,
        loader: "ts-loader",
        options: {
          appendTsSuffixTo: [/\.vue$/],
        },
        exclude: /node_modules/,
      },
      {
        test: /\.vue$/,
        loader: "vue-loader",
      },
      {
        test: /\.css$/,
        use: ["vue-style-loader", "css-loader"],
      },
    ],
  },
  resolve: {
    modules: ["node_modules"],
    extensions: [".ts", ".js", ".vue"],
  },
  plugins: [new VueLoaderPlugin()],
};
