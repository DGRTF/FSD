
const HtmlWebpackPlugin = require('html-webpack-plugin'); //installed via npm
const webpack = require('webpack');
let path = require('path');

module.exports =
{
    entry: './src/index.js',
    output:
    {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js',
                 //publicPath: './dist/'
    },
    plugins: [
        new HtmlWebpackPlugin({
        template:'./index.pug',
        })
        ],
    module:
    {
        rules:
            [

                {
                    test: /\.css$/,
                    use: [
                        'style-loader',
                        'css-loader'
                    ]
                },

                {
                    test: /\.s[ac]ss$/,
                    use: [
                        // Creates `style` nodes from JS strings
                        'style-loader',
                        // Translates CSS into CommonJS
                        'css-loader',
                        // Compiles Sass to CSS
                        'sass-loader',
                    ],
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