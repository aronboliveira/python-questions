/** @type {import('next').NextConfig} */
const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlReplaceWebpackPlugin = require("html-replace-webpack-plugin");
const { SubresourceIntegrityPlugin } = require("webpack-subresource-integrity");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const webpack = require("webpack");
const packageJson = require("./package.json");
const nextConfig = {
  generateBuildId: async () => process.env.GIT_HASH,
  output: "export",
  reactStrictMode: true,
  webpack: config => {
    config.output = {
      ...config.output,
      filename: `bundle.${packageJson.version}.[contenthash].min.js`,
      path: path.resolve(__dirname, "../docs"),
      publicPath: "",
      crossOriginLoading: "anonymous",
    };
    config.resolve.extensions.push(".tsx", ".ts", ".scss", ".css");
    config.module.rules.push(
      {
        test: /\.tsx?$/,
        use: [
          {
            loader: "ts-loader",
            options: {
              transpileOnly: true,
              compilerOptions: {
                jsx: "react-jsx",
              },
            },
          },
          {
            loader: "string-replace-loader",
            options: {
              search: 'src: "/images/',
              replace: 'src: "images/',
              flags: "g",
            },
          },
        ],
        exclude: [/node_modules/, /vite.config.ts/, /vite.config.js/],
      },
      {
        test: /\.scss$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
        generator: {
          filename: "images/[hash][ext][query]",
        },
      }
    );
    config.plugins.push(
      new HtmlReplaceWebpackPlugin([
        {
          pattern: /"\/images\//g,
          replacement: "images/",
        },
      ]),
      new SubresourceIntegrityPlugin({
        hashFuncNames: ["sha384"],
        enabled: true,
      }),
      new MiniCssExtractPlugin({
        filename: `organo_lab_styles.${packageJson.version}.[contenthash].min.css`,
      }),
      new CopyWebpackPlugin({
        patterns: [
          { from: "public/images", to: "images" },
          { from: "public/browserConfig.xml", to: "browserConfig.xml" },
        ],
      }),
      new webpack.DefinePlugin({
        VERSION: JSON.stringify(packageJson.version),
      })
    );
    return config;
  },
  productionBrowserSourceMaps: true,
};

module.exports = nextConfig;
