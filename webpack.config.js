
const HtmlWebpackPlugin = require('html-webpack-plugin'); //installed via npm
const webpack = require('webpack');
const path = require('path');
const fs = require('fs');
const CopyPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const merge = require('webpack-merge');
const SearchEntry = require("./searchEntry.js");


let pagesPath = path.resolve(__dirname, "./src/pages");
let searchEntry = new SearchEntry(pagesPath);

module.exports =
{
    entry: merge([searchEntry.entry, { index: './src/index.js' }]),
    output:
    {
        path: path.resolve(__dirname, 'dist'),
        filename: 'scripts/[name].js',
        //publicPath: './dist/'
    },
    plugins: searchEntry.HWPluginObjectArr.concat([
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            "window.jQuery": "jquery",
        }),


        new HtmlWebpackPlugin({
            inject: true,
            chunks: ['index'],
            filename: 'index.html',
            template: './src/index.pug',
        }),
        new MiniCssExtractPlugin({
            filename: "css/[name].css",
        }),

        new CopyPlugin([
            { from: 'src/img/favicon.ico', to: '' }
        ]),
    ]),
    module:
    {
        rules:
            [
                {
                    test: /\.m?js$/,
                    exclude: /(node_modules|bower_components)/,
                    use: {
                        loader: 'babel-loader',
                        options: {
                            presets: [
                                '@babel/preset-env'
                            ]
                        }
                    }
                },

                {
                    test: /\.css$/,
                    use: [
                        'style-loader',
                        {
                            loader: MiniCssExtractPlugin.loader,
                        },
                        'css-loader',
                        'postcss-loader'
                    ]
                },

                {
                    test: /\.(jpeg|jpg|png|gif)$/,
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                        outputPath: 'img',
                        publicPath: "./../img"
                    }
                },

                {
                    test: /\.(ttf|woff|woff2|eot)$/,
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                        outputPath: 'fonts',
                        publicPath: "./../fonts"
                    }
                },

                {
                    test: /\.svg$/,
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                        outputPath: 'img',
                        publicPath: "./../img"
                    }
                },

                {
                    test: /\.scss$/,
                    use: [
                        // Creates `style` nodes from JS strings
                        { loader: 'style-loader' },
                        {
                            loader: MiniCssExtractPlugin.loader,
                        },
                        // Translates CSS into CommonJS
                        { loader: 'css-loader' },
                        { loader: 'postcss-loader' },
                        { loader: 'resolve-url-loader' },
                        {
                            // Compiles Sass to CSS
                            loader: 'sass-loader',
                            options: {
                                sourceMap: true
                            }
                        }
                    ]
                },

                {
                    test: /\.pug$/,
                    loader: 'pug-loader',
                    options:
                    {
                        pretty: true
                    }
                }

            ],
    },
};