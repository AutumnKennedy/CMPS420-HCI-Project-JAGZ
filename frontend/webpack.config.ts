/// <reference types="node" />
import path from "path";
import webpack, { Configuration } from "webpack";

const config: Configuration = {
  entry: "./src/index.ts", // Change the entry file extension to .ts
  output: {
    path: path.resolve(__dirname, "./static/frontend"),
    filename: "[name].ts",
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/, // Change the test pattern to match .ts and .tsx files
        exclude: /node_modules/,
        use: {
          loader: "ts-loader", // Use ts-loader for TypeScript files
        },
      },
    ],
  },
  optimization: {
    minimize: true,
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development') // or 'production'
    }),
    
  ],
};

export default config;

