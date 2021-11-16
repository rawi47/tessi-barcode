module.exports = {
    mode: 'development',
    entry: [
        './src/index.js'
    ],
    module: {
        rules: [{
            test: /\.jsx?$/,
            exclude: /node_modules/,
            use: {
            loader: "babel-loader",
            options: {
                presets: ['@babel/preset-env', '@babel/preset-react']
            }
            }
        }]
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    output: {
        path: __dirname + '/dist',
        publicPath: '/',
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: './dist'
    }
};
