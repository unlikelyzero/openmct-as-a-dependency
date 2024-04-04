import path from 'path';
import { fileURLToPath } from 'url';
import HtmlWebpackPlugin from "html-webpack-plugin";
import { merge } from 'webpack-merge';
import commonConfig from './webpack.common.mjs';

// Replicate __dirname functionality for ES modules
const __dirname = path.dirname(fileURLToPath(import.meta.url));

/** @type {import('webpack').Configuration} */
const devConfig = {
    mode: 'development',
    devtool: 'eval-source-map',
    plugins: [
        new HtmlWebpackPlugin({
          template: "index.html",
        }),
      ],
    devServer: {
        static: [
            {directory: path.join(__dirname, "dist")},
            {directory: path.join(__dirname, "node_modules/openmct/dist")}
          ],
          compress: true,
          port: 9000,
    }
};

export default merge(commonConfig, devConfig);