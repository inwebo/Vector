const path = require('path');

module.exports = {
    entry: {
        vector: './src/main.js',
        demo: './demos/demo.js',
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
