
const HtmlWebpackPlugin = require('html-webpack-plugin'); //installed via npm
const webpack = require('webpack');
let path = require('path');

module.exports =
{
    entry: {
        index: './src/index.js',
        formElements: './src/pages/form-elements/form-elements.js',
        cards: './src/pages/cards/cards.js',
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
        })
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
                    outputPath: 'fonts12'
                }
            },

            {
                test: /\.s[ac]ss$/,
                use: [
                    // Creates `style` nodes from JS strings
                    { loader: 'style-loader',options: {}},
                    // Translates CSS into CommonJS
                    { loader: 'css-loader',options: {}},
                    { loader: 'resolve-url-loader'},
                    {
                        // Compiles Sass to CSS
                        loader: 'sass-loader',
                        options: {
                            sourceMap: true,
                            // sourceMapContents: false
                            // sourceMapContents: false
                            // implementation: require('sass'),
                            // sassOptions:{
                            //     sourceMap: true,
                            //     sourceMapContents: false
                            // }
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