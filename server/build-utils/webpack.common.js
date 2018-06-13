"use strict";
const webpack = require("webpack");
const commonPaths = require("./common-paths");
const nodeExternals = require("webpack-node-externals");

const config = {
  externals: [nodeExternals()],
  target: "node",
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
            plugins: [
              "transform-flow-strip-types",
              "@babel/plugin-transform-runtime",
              "transform-class-properties"
            ]
          }
        }
      },
      {
        test: /\.(graphql|gql)$/,
        exclude: /node_modules/,
        loader: require.resolve("./bindings-loader")
      }
    ]
  }
};

module.exports = config;
