const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { VueLoaderPlugin } = require("vue-loader");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
    entry: {
        main: './src/index.js',
        espressoTheme: './node_modules/openmct/src/plugins/themes/espresso-theme.scss'
    },
    mode: 'development',
    devtool: 'eval-source-map',
    output: {
        filename: '[name].js',
        library: '[name]',
        libraryTarget: 'umd',
        path: path.resolve(__dirname, 'dist')
    },
    resolve: {
        alias: {
            "@": path.join(__dirname, "node_modules/openmct"),
            "openmct": path.join(__dirname, "node_modules/openmct/dist/openmct.js"),
            "vue": path.join(__dirname, "node_modules/vue/dist/vue.js")
        }
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
                test: /\.js$/,
                loader: 'babel-loader'
            },
            // this will apply to both plain `.css` files
            // AND `<style>` blocks in `.vue` files
            {
                test: /\.css$/,
                use: [
                  'vue-style-loader',
                  'css-loader'
                ]
            },
            {
                test: /\.(sc|sa|c)ss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader'                ]
            },
            {
                test: /\.html$/,
                use: 'html-loader'
            },
            {
                test: /\.(jpg|jpeg|png|svg)$/,
                type: 'asset/resource',
                generator: {
                    filename: 'images/[name][ext]'
                }
            },
            {
                test: /\.ico$/,
                type: 'asset/resource',
                generator: {
                    filename: 'icons/[name][ext]'
                }
            },
            {
                test: /\.(woff|woff2?|eot|ttf)$/,
                type: 'asset/resource',
                generator: {
                    filename: 'fonts/[name][ext]'
                }
            }
        ]
    }
};

export default config;