
const HtmlWebpackPlugin = require('html-webpack-plugin'); //installed via npm
const webpack = require('webpack');
let path = require('path');

module.exports =
{
    entry: {
        index: './src/index.js',
        formElements: './src/pages/form-elements/form-elements.js',
    },
    output:
    {
        path: path.resolve(__dirname, 'dist'),
        filename: 'scripts/[name].js',
        //publicPath: './dist/'
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template:'./index.pug',
            }),
        new HtmlWebpackPlugin({
            filename: 'pages/form-elements.html',
            template:'./src/pages/form-elements/form-elements.pug',
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