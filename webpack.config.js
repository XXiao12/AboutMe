const HtmlWebPackPlugin = require("html-webpack-plugin");
const ManifestPlugin = require('webpack-manifest-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const UglifyJS = require('uglify-es');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
var CompressionPlugin = require("compression-webpack-plugin");
const path = require('path');
const webpack = require('webpack');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const DefaultUglifyJsOptions = UglifyJS.default_options();
const compress = DefaultUglifyJsOptions.compress;
for (let compressOption in compress) {
    compress[compressOption] = false;
}
compress.unused = true;

module.exports = {
    mode: 'none',
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'build'), // change this
        publicPath: '/',
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: "./build",
        historyApiFallback: true,
        contentBase: './',
        hot: true
    },
    resolve: {
        extensions: ['*', '.js', '.jsx']
    },

    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                use: ['style-loader', 'css-loader'],
            },
            {
                // Do not transform vendor's CSS with CSS-modules
                // The point is that they remain in global scope.
                // Since we require these CSS files in our JS or CSS files,
                // they will be a part of our compilation either way.
                // So, no need for ExtractTextPlugin here.
                test: /\.css$/,
                include: /node_modules/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            publicPath: '../',
                            hmr: process.env.NODE_ENV === 'development',
                        },
                    },
                    'css-loader',
                ],
            },
            {
                test: /\.(jpe?g|png|gif)$/i,
                // loader: "url-loader?name=app/images/[name].[ext]"
                loader: 'url-loader',
                options: {
                    // Images larger than 10 KB won’t be inlined
                    limit: 10 * 1024
                }
            },
            {
                test: /\.svg$/,
                loader: 'svg-url-loader',
                options: {
                    // Images larger than 10 KB won’t be inlined
                    limit: 10 * 1024,
                    // Remove quotes around the encoded URL –
                    // they’re rarely useful
                    noquotes: true,
                }
            }
        ]
    },
    optimization: {
        minimize: true,
        minimizer: [
            new UglifyJsPlugin({
                sourceMap: true,
                uglifyOptions: {
                    compress: {
                        inline: false
                    }
                }
            })
        ],
        usedExports: true,
        sideEffects: true,
        runtimeChunk: false,
        splitChunks: {
            cacheGroups: {
                default: false,
                commons: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendor_app',
                    chunks: 'all',
                    minChunks: 2
                }
            }
        }
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: path.resolve('./public/index.html'),
            favicon: './public/favicon.ico',
            inject: true,
            sourceMap: true,
            chunksSortMode: 'dependency'
        }),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': '"production"'
        }),
        new CopyWebpackPlugin([{
            from: './public/favicon.ico'
        }]),
        new CompressionPlugin({
            filename: "[path].gz[query]",
            algorithm: "gzip",
            test: /\.js$|\.css$|\.html$/,
            threshold: 8192,
            minRatio: 1
        }),
        new ManifestPlugin(),
        new MiniCssExtractPlugin({
            filename: '[name].css',
            chunkFilename: '[id].css',
        }),
        new BundleAnalyzerPlugin()
    ]
};
