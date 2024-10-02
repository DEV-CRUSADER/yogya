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
              modules: true, // Keep this if you're using CSS modules
            },
          },
          "postcss-loader", // Add this line for Tailwind
        ],
        include: /\.module\.css$/,
      },
      {
        test: /\.css$/,
        use: [
          "style-loader",
          "css-loader",
          "postcss-loader", // Add this line for Tailwind
        ],
        exclude: /\.module\.css$/,
      },
      {
        test: /\.(png|jpe?g|gif|webp)$/i,
        use: {
          loader: "file-loader",
          options: {
            outputPath: "images",
          },
        },
      },
      {
        test: /\.(woff|woff2|ttf)$/i,
        use: {
          loader: "file-loader",
          options: {
            outputPath: "fonts",
          },
        },
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
