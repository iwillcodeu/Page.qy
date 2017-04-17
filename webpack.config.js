module.exports = {
    entry: {
        index: require('path').join(__dirname, './dist/index.js'),
    },
    output: {
        path: require('path').join(__dirname, './src/'),
        filename: '[name].build.js',
        publicPath: '/assets/'
    },
    module: {
        loaders: [
            {
                test: /\.js|jsx$/,
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'es2015'],
                }
            },
            {
                test: /\.css$/,
                loader: 'style-loader!style-loader'
            },
            {
                test: /\.(gif|jpg|png|woff|svg|eot|ttf)\??.*$/,
                loader: 'url-loader?limit=50000&name=[path][name].[ext]'
            }
        ]
    },
    target: "electron",
};
