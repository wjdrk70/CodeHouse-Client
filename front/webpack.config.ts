import * as path from 'path';
import webpack, { Configuration as WebpackConfiguration } from 'webpack';
import { Configuration as WebpackDevServerConfiguration } from 'webpack-dev-server';
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin';
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin';
// import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
// import { CleanWebpackPlugin } from 'clean-webpack-plugin';
import WebpackBar from 'webpackbar';

const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const { BundleAnalyzerPlugin } =require('webpack-bundle-analyzer');
// const WebpackBar = require('webpackbar');

interface Configuration extends WebpackConfiguration {
  devServer?: WebpackDevServerConfiguration;
}

const isDevelopment = process.env.NODE_ENV !== 'production';

const config: Configuration = {
  name:'codehouse',
  mode: isDevelopment ? 'development' : 'production',
  devtool: !isDevelopment ? 'hidden-source-map' : 'eval',
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
    alias: {
      '@hooks': path.resolve(__dirname, 'hooks'),
      '@components': path.resolve(__dirname, 'components'),
      '@layouts': path.resolve(__dirname, 'layouts'),
      '@pages': path.resolve(__dirname, 'pages'),
      '@utils': path.resolve(__dirname, 'utils'),
      '@typings': path.resolve(__dirname, 'typings'),
    },
  },  
  module: {
    rules: [
        {
          test: /\.tsx?$/,
          loader: 'babel-loader',
          options: {
            presets: [
              [
                '@babel/preset-env',
                {
                  targets: { browsers: ['last 2 chrome versions'] },
                  debug: isDevelopment,
                },
              ],
              '@babel/preset-react',
              '@babel/preset-typescript',
            ],
            env: {
              development: {
                plugins: [require.resolve('react-refresh/babel')],
              },
            },
          },
          exclude: path.join(__dirname, 'node_modules'),
        },
        {
          test: /\.css?$/,
          use: ['style-loader', 'css-loader'],
        },
      ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new WebpackBar({
      name: '🚚 building Client...',
      color: '#FFA500',
    }),
    new ForkTsCheckerWebpackPlugin({
      async: false,
      // eslint:{
      //   files:"./src/**/*",

      // }
    }),
    new webpack.EnvironmentPlugin({ NODE_ENV: isDevelopment ? 'development' : 'production' }),
  ],
  entry: { app: './client' },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].js',
    publicPath: '/dist/',
  },
  devServer: {
    historyApiFallback: true, //react router
    port: 8000,
    publicPath: '/dist/',
    // proxy: {
    //     '/api/': {
    //       target: 'http://localhost:3095',
    //       changeOrigin: true,
    //     },
    //   },
  },

};

if (isDevelopment && config.plugins) {
    config.plugins.push(new webpack.HotModuleReplacementPlugin());
    config.plugins.push(new ReactRefreshWebpackPlugin());
    // config.plugins.push(new BundleAnalyzerPlugin({ analyzerMode: 'server', openAnalyzer: false }));
  }
  if (!isDevelopment && config.plugins) {
    config.plugins.push(new webpack.LoaderOptionsPlugin({ minimize: true }));
    // config.plugins.push(new BundleAnalyzerPlugin({ analyzerMode: 'static' }));
  }
export default config;