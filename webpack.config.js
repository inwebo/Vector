const path = require('path');

module.exports = {
    entry: {
        vector: './src/index.js',
        test: './test/tests.js',
    },
    output: {
        filename: '[name].min.js',
        path: path.join(__dirname, 'dist'),
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                include: path.resolve(__dirname, 'src'),
                loader: 'babel-loader'
            },
        ]
    }
};
