const webpack = require('webpack');
const path = require('path');

process.env.NODE_ENV = process.env.NODE_ENV || 'production';

module.exports = {
    entry: [
        'script!jquery/dist/jquery.min.js',
        'script!foundation-sites/dist/foundation.min.js',
        './app/app.js'
    ],
    externals: {
        jquery: 'jQuery'
    },
    plugins: [
        new webpack.ProvidePlugin({
            '$': 'jquery',
            'jQuery': 'jquery'
        }),
        new webpack.optimize.UglifyJsPlugin({
            compressor: {
                warnings: false
            }
        })
    ],
    output: {
        path: __dirname,
        filename: './public/bundle.js'
    },
    resolve: {
        root: __dirname,
        modulesDirectories: [
            'node_modules',
            './app/components',
            './app/api'
        ],
        alias: {
            app: 'app',
            Main: 'app/components/Main.js',
            actions: 'app/actions/actions.js',
            applicationStyles: 'app/styles/app.scss'
        },
        extentions: ['', '.js', '.jsx'],
    },
    module: {
        loaders: [
            {
                loader: 'babel-loader',
                query: {
                    presets: ["react", "es2015", 'stage-0']
                },
                test: /\.js?$/,
                exclude: /(node_modules|bower_components)/
            }
        ]
    },
    sassLoader: {
        includePaths: [
            path.resolve(__dirname, './node_modules/foundation-sites/scss')
        ]
    },
    devtool: process.env.NODE_ENV === 'production' ? undefined : 'inline-source-map'
};
