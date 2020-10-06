
const HtmlWebpackPlugin = require('html-webpack-plugin'); //installed via npm
const webpack = require('webpack');
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const merge = require('webpack-merge');
const SearchEntry = require("./searchEntry.js");
const FaviconsWebpackPlugin = require('favicons-webpack-plugin')


let pagesPath = path.resolve(__dirname, "./src/pages");
let searchEntry = new SearchEntry(pagesPath);

module.exports =
{
    entry: merge([searchEntry.entry, { index: './src/index.js' }]),
    output:
    {
        path: path.resolve(__dirname, 'dist'),
        filename: 'scripts/[name].js',
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
            favicon: './src/img/favicon.ico',
        }),

        new FaviconsWebpackPlugin('./src/img/label.svg'),

        new MiniCssExtractPlugin({
            filename: "css/[name].css",
        }),

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
                    use: [
                        {
                            loader: 'file-loader',
                            options: {
                                name: '[name].[ext]',
                                outputPath: 'img',
                                publicPath: "./../img"
                            }
                        },
                        {
                            loader: 'image-webpack-loader',
                            options: {
                                mozjpeg: {
                                    progressive: true,
                                },
                                // optipng.enabled: false will disable optipng
                                optipng: {
                                    enabled: false,
                                },
                                pngquant: {
                                    quality: [0.65, 0.90],
                                    speed: 4
                                },
                                gifsicle: {
                                    interlaced: false,
                                },
                                // the webp option will enable WEBP
                                webp: {
                                    quality: 75
                                }
                            }
                        },
                    ],
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