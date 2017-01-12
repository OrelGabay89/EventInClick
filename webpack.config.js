var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var path = require('path');

srcPath = path.join(__dirname, 'src');

module.exports = {
    context: __dirname,
    debug: true,

    entry: {
        'app':path.join(srcPath,'main.ts'),
         
      
        'polyfills': [
            'core-js/es6',
            'core-js/es7/reflect',
            'zone.js/dist/zone'
        ]
    },
    output: {
         path: path.join(__dirname, "dist"),
        filename: '[name].[hash].js',
        publicPath: "/"
    },
    module: {
        loaders: [
            { test: /\.component.ts$/, loader: 'ts!angular2-template' },
            { test: /\.ts$/, exclude: /\.component.ts$/, loader: 'ts' },
            { test: /\.html$/, loader: 'raw' },
            { test: /\.css$/, loader: 'raw' }, {
                test: /\.less$/,
                loader: 'style!css!less'
            },
            { test: /bootstrap\/dist\/js\/umd\//, loader: 'imports?jQuery=jquery' },
            {
                test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,
                loader: "url?limit=10000&minetype=application/font-woff"
            }, {
                test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,
                loader: "url?limit=10000&minetype=application/font-woff"
            }, {
                test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
                loader: "url?limit=10000&minetype=application/octet-stream"
            }, {
                test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
                loader: "file"
            },
            {
                test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
                loader: "url?limit=10000&minetype=image/svg+xml"
            },
            { test: /\.json$/, loader: "json-loader" },
            { test: /\.png$/, loader: "url-loader?prefix=img/&limit=5000" },
            { test: /\.jpg$/, loader: "url-loader?prefix=img/&limit=5000" },
            { test: /\.gif$/, loader: "url-loader?prefix=img/&limit=5000" },
            { test: /\.jade$/, loader: "jade-loader?self" },
        ]
    },
    resolve: {
        extensions: ['', '.js', '.ts', '.html', '.css'],
         /*alias: {
            dtp_css : path.join(__dirname, '/node_modules/jquery-datetimepicker/build/jquery.datetimepicker.min.css')
         }*/
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: 'polyfills'
        }),
        new webpack.ProvidePlugin({
            jQuery: 'jquery',
            $: 'jquery',
            jquery: 'jquery'
        }),
        new HtmlWebpackPlugin({
            template: './src/index.html'
        }),
        new webpack.DefinePlugin({
            app: {
                environment: JSON.stringify(process.env.APP_ENVIRONMENT || 'development')
            }
        }),
        //new CopyWebpackPlugin([{ from: '/src/app/assets', to: '/src/app/assets'  }]),
    ]

};

