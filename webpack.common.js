const path = require("path");

module.exports = {
  entry: {
    "est-shipping": "./scripts/est-shipping.js",
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
      {
        test: /\.svg$/i,
        issuer: /\.[jt]sx?$/,
        exclude: /node_modules/,
        use: ['@svgr/webpack'],
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".js", ".jsx", ".tsx"],
  },
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "assets"),
  },
};
