const path = require("path");
const webpack = require("webpack");
const WebpackPwaManifest = require("webpack-pwa-manifest");

module.exports = {
  entry: "/src/index.js",
  output: { path: path.resolve(__dirname, "dist") },
  plugins: [
      new WebpackPwaManifest({
          name: "Dinder Dog",
          short_name: "Dinder",
          description: "An app that lets you pick the perfect breed for your best fur friend.",
          start_url: "./src/index.js",
          background_color: "#e66465",
          theme_color: "#ffffff",
          fingerprints: false,
          inject: false,
          icons: [{
              src: path.resolve("client/src/assets/images/logo.png"),
              sizes: [96, 128, 192, 256, 384, 512],
              destination: path.join("assets", "icons")
          }]
      })
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
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