const path = require("path");

module.exports = {
  watch: true,
  entry: "/dashboard/static/assets/js/app.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dashboard/static/assets/js/dist"),
    clean: true,
  },
  module: {
    rules: [
     {
      test: /\.css$/,
      use: [
        "style-loader",
        {
          loader: "css-loader",
          options: {
            importLoaders: 1,
            modules: true,
          },
        },
      ],
      include: /\.module\.css$/,
    },
    {
      test: /\.css$/,
      use: ["style-loader", "css-loader"],
      exclude: /\.module\.css$/,
    },
      {
        test: /\.?js$/,
        exclude: /node_modules/,
        use: {

          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
    ],
  },
};
