const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const NODE_ENV = process.env.NODE_ENV;

const path = {
  src: resolve(__dirname, 'src'),
  dist: resolve(__dirname, 'dist'),
  entry: resolve(__dirname, 'src/index.ts'),
  public: resolve(__dirname, 'public/index.html'),
};

module.exports = {
  resolve: {
    alias: {
      '@': path.src,
    },
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
  },
  mode: NODE_ENV ? NODE_ENV : 'development',
  entry: path.entry,
  output: {
    path: path.dist,
    filename: 'main-[hash].js',
  },
  watch: true,
  watchOptions: {
    ignored: /node_modules/,
    poll: 1000,
  },
  module: {
    rules: [
      {
        test: /\.[tj]sx?$/,
        exclude: /node_modules/,
        use: ['ts-loader'],
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(s*)css$/,
        use: [
          'style-loader',
          'css-modules-typescript-loader?modules',
          {
            loader: 'css-loader',
            options: {
              modules: {
                mode: 'local',
                localIdentName: '[name]__[local]__[hash:base64:5]',
                auto: /\.module\.\w+$/i,
              },
            },
          },
          'sass-loader',
        ],
      },
      {
        test: /\.svg$/,
        use: ['@svgr/webpack', 'url-loader'],
      },
      {
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'fonts/',
            },
          },
        ],
      },
      {
        test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
        use: ['url-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.public,
    }),
  ],
  devServer: {
    port: 3000,
    open: true,
    hot: true,
    historyApiFallback: true,
  },
  devtool: 'source-map',
};
