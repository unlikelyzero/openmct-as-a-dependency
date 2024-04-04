import path from 'path';
import { VueLoaderPlugin } from "vue-loader";
//import CopyWebpackPlugin from "copy-webpack-plugin";
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

/** @type {import('webpack').Configuration} */
const commonConfig = {
    entry: './src/index.js',
    devtool: 'source-map',
    output: {
        clean: true,
        filename: '[name].js',
        library: {
            name: "[name]",
            type: "umd",
          },
        path: path.resolve(new URL('.', import.meta.url).pathname, 'dist')
    },
    plugins: [
        //Only necessary when using a vue open mct plugin
        new VueLoaderPlugin()
    ],
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.js$/,
                enforce: "pre",
                use: ["source-map-loader"]
            }
        ],
    }
};

export default commonConfig;