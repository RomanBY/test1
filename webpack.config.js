const path = require('path');

module.exports = {
    entry: './src/app.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            },
            {
                test: /\.(jpg|jpeg|gif|png)$/,
                exclude: /node_modules/,
                loader:'url-loader?limit=1024&name=src/img/[name].[ext]'
            },

        ]
    }
};