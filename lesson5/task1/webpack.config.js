const HtmlWebpackPlugin =require("html-webpack-Plugin");
const MiniCssExtractPlugin=require("mini-css-extract-Plugin");
const {CleanWebpackPlugin}=require("clean-webpack-plugin");
const webpack = require("webpack");

module.exports=(env,argv) =>{


    const isProduction = argv.mode==="production";

    const config = {
        entry: "./src/index.jsx",
        output: {
          filename: "bundle.js"
        },
        module: {
          rules: [
            {
              test: /.jsx?$/,
              use: ["babel-loader"]
            },
            {
              test: /.s?css$/,
              use: [
                isProduction ? MiniCssExtractPlugin.loader : "style-loader",
                "css-loader",
                "sass-loader"
              ]
            }
          ]
        },
        plugins: [
          new webpack.ProgressPlugin(),
          new CleanWebpackPlugin(),
          new HtmlWebpackPlugin({
            template: "./src/index.html"
          })
        ],
        resolve: {
          extensions: [".js", ".jsx"]
        },
        devServer: {
          hot: true
        }
      };
    
      if (isProduction) {
        config.plugins.push(
          new MiniCssExtractPlugin({
            filename: "[name].css"
          })
        );
      }
    
      return config;
    };
