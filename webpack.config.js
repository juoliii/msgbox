const path = require('path')
var webpack = require('webpack');
var UglifyJSPlugin = require('uglifyjs-webpack-plugin');

let config = {
    mode: 'production',
    entry: {
        main: path.join(__dirname, './src/msgbox.js')
    },
    module: {
        rules: [{
            test: /.css$/,
            use: [
                'style-loader',
                'css-loader'
            ]
        }, {
            test: /.(jpg|jpeg|png|gif|svg)$/,
            use: 'url-loader'
        }]
    },
    optimization: {
        minimizer: [new UglifyJSPlugin({
            uglifyOptions: {
                output: {
                    comments: false
                },
                compress: {
                    drop_debugger: true,
                    drop_console: true
                }
            }
        })]
    },
    plugins: [],
    output: {
        filename: 'msgbox.min.js',
        path: path.join(__dirname, './dist')
    }
}

module.exports = config