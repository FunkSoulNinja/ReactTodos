const webpackConfig = require('./webpack.config');

module.exports = function (config) {
    config.set({
        browsers: ['Chrome'],
        singleRun: false,
        frameworks: ['mocha'],
        files: ['app/tests/**/*.test.js'],
        preprocessors: {
            'app/tests/**/*.test.js': ['webpack', 'sourcemap']
        },
        reporters: ['mocha'],
        client: {
            mocha: {
                timeout: '5000'
            }
        },
        webpack: webpackConfig,
        webpackServer: {
            noInfo: true
        }
    });
};
