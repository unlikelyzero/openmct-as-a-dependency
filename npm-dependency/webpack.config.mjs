import path from 'path';
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import { VueLoaderPlugin } from "vue-loader";
//import CopyWebpackPlugin from "copy-webpack-plugin";
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const config = {
    entry: {
        'openmct-example': './src/index.js'
    },
    mode: 'development',
    devtool: 'eval-source-map',
    output: {
        filename: '[name].js',
        library: '[name]',
        libraryTarget: 'umd',
        path: path.resolve(new URL('.', import.meta.url).pathname, 'dist')
    },
    plugins: [
        new VueLoaderPlugin(),
        new MiniCssExtractPlugin({
            filename: '[name].css',
            chunkFilename: '[name].css'
        }),
    ],
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.html$/i,
                type: 'asset/source'
            },
            {
                test: /\.js$/,
                enforce: "pre",
                use: ["source-map-loader"]
            }
        ],
    },
    devServer: {
        compress: true,
        port: 9000,
        static: {
            directory: path.join(__dirname, './'),
        },
    }
};

export default config;