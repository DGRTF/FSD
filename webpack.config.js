
const HtmlWebpackPlugin = require('html-webpack-plugin'); //installed via npm
const webpack = require('webpack');
let path = require('path');
const CopyPlugin = require('copy-webpack-plugin');

module.exports =
{
    entry: {
        index: './src/index.js',
        formElements: './src/pages/form-elements/form-elements.js',
        cards: './src/pages/cards/cards.js',
        test: './src/pages/test/test.js'
    },
    output:
    {
        path: path.resolve(__dirname, 'dist'),
        filename: 'scripts/[name].js',
        //publicPath: './dist/'
    },
    plugins: [
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
        new HtmlWebpackPlugin({
            inject: true,
            chunks: ['formElements'],
            filename: 'pages/form-elements.html',
            template: './src/pages/form-elements/form-elements.pug',
        }),
        new HtmlWebpackPlugin({
            inject: true,
            chunks: ['cards'],
            filename: 'pages/cards.html',
            template: './src/pages/cards/cards.pug',
        }),
        new HtmlWebpackPlugin({
            inject: true,
            chunks: ['test'],
            filename: 'pages/test.html',
            template: './src/pages/test/test.pug',
        }),

        new CopyPlugin([
            { from: 'src/img/favicon.ico', to: ''}
          ]),
    ],
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
                        // 'style-loader',
                        'css-loader',
                        // 'postcss-loader'
                    ]
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
                        publicPath: "/img"
                    }
                },

                // {
                //     test: /\.ico$/,
                //     loader: 'file-loader',
                //     options: {
                //         name: '[name].[ext]',
                //         outputPath: '/'
                //     }
                // },

                {
                    test: /\.s[ac]ss$/,
                    use: [
                        // Creates `style` nodes from JS strings
                        { loader: 'style-loader' },
                        // Translates CSS into CommonJS
                        { loader: 'css-loader' },
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




//module.exports = conf;