const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

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
            "openmct": path.join(__dirname, "node_modules/openmct/dist/openmct.js")
        }
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name].css',
            chunkFilename: '[name].css'
        })
    ],
    module: {
        rules: [
            {
                test: /\.(sc|sa|c)ss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'fast-sass-loader'
                ]
            },
            {
                test: /\.html$/,
                use: 'html-loader'
            },
            {
                test: /\.(jpg|jpeg|png|svg|ico|woff2?|eot|ttf)$/,
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]',
                    outputPath(url, resourcePath, context) {
                        if (/\.(jpg|jpeg|png|svg)$/.test(url)) {
                            return `images/${url}`
                        }
                        if (/\.ico$/.test(url)) {
                            return `icons/${url}`
                        }
                        if (/\.(woff2?|eot|ttf)$/.test(url)) {
                            return `fonts/${url}`
                        } else {
                            return `${url}`;
                        }
                    }
                }
            },
        ]
    },
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 9000,
    },
};