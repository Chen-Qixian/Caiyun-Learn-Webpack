

module.exports={
    entry : './src/js/show.js',
    output : {
        path : __dirname + '/dist',
        filename : 'bundle.js'
    },
    module : {
        rules : [
            {
                test : /\.css$/,
                loader : 'style-loader!css-loader'
            }
        ]
    },
    mode:'production'
}