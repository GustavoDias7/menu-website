const path = require("path");
const globAll = require("glob-all");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { PurgeCSSPlugin } = require("purgecss-webpack-plugin");
const { getPaths } = require("./utils/recursive-path.js");
const { DefinePlugin } = require("webpack");
const NunjucksWebpackPlugin = require("nunjucks-webpack-plugin");
const { context } = require("./utils/constantes.js");
const WatchExternalFilesPlugin = require("webpack-watch-files-plugin").default;

module.exports = {
  context: __dirname,

  devServer: {
    static: {
      directory: path.join(__dirname, "staticfiles/"),
    },
    compress: true,
    port: 9000,
  },

  entry: globAll
    .sync(["./src/**/pages/**/*.{js,css,scss}"])
    .reduce((obj, el = "") => {
      const name = path.parse(el).name;
      if (!obj[name]) obj[name] = [];
      obj[name].push(el);
      return obj;
    }, {}),

  output: {
    path: path.resolve(__dirname, "./staticfiles/js/pages/"),
    publicPath: "/",
    filename: "[name].js",
    clean: true,
  },

  module: {
    rules: [
      {
        test: /\.(sa|sc|c)ss$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
      {
        test: /\.html$/,
        type: "asset/resource",
        generator: {
          emit: false,
          filename: ({ runtime }) =>
            runtime === "index"
              ? "../../[name][ext]"
              : "../../[name]/index[ext]",
        },
      },
      {
        test: /\.njk$/,
        type: "asset/resource",
        exclude: path.resolve(__dirname, "node_modules/"),
        generator: { emit: false },
      },
      {
        test: /\.(svg|png|jpg|gif)$/i,
        type: "asset/resource",
        generator: {
          emit: false,
          filename: "img/[name][ext]",
        },
      },
    ],
  },

  plugins: [
    new DefinePlugin({
      __VUE_OPTIONS_API__: true,
      __VUE_PROD_DEVTOOLS__: true,
      __VUE_PROD_HYDRATION_MISMATCH_DETAILS__: "false",
    }),

    new MiniCssExtractPlugin({
      filename: "../../css/pages/[name].css",
    }),

    ...globAll.sync("./src/templates/pages/{*,**/*}.{html,njk}").map((src) => {
      return new PurgeCSSPlugin({
        paths: globAll.sync(getPaths(src), { nodir: true }),
        only: [`/${path.parse(src).name}.`],
        fontFace: true,
        variables: true,
        keyframes: true,
        defaultExtractor: (content) => content.match(/[\w-/:]+(?<!:)/g) || [],
      });
    }),

    new WatchExternalFilesPlugin({
      files: ["./src/templates/**/{*,**/*}.{html,njk}"],
    }),

    new NunjucksWebpackPlugin({
      templates: globAll.sync("./src/templates/pages/**.njk").map((src) => {
        const name = path.parse(src).name;
        const to =
          name === "index"
            ? `../../${name}.html`
            : `../../${path.parse(src).name}/index.html`;
        return { from: src, to, context };
      }),
    }),
  ],
};
