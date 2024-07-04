import HtmlWebpackPlugin from 'html-webpack-plugin'
import path from 'path'
import webpack from 'webpack'
import type { Configuration as DevServerConfiguration } from 'webpack-dev-server'

type Mode = 'development' | 'production'

interface EnvVariables {
	mode: Mode
	port: number
}

export default (env: EnvVariables) => {
	const isDev = env.mode === 'development'

	const config: webpack.Configuration = {
		mode: env.mode || 'development',
		entry: path.resolve(__dirname, 'src', 'index.tsx'),
		module: {
			rules: [
				{
					test: /\.tsx?$/,
					use: 'ts-loader',
					exclude: /node_modules/,
				},
			],
		},
		resolve: {
			extensions: ['.tsx', '.ts', '.js'],
		},
		output: {
			path: path.resolve(__dirname, 'build'),
			filename: '[name].[contenthash].bundle.js',
			clean: true,
		},
		plugins: [
			new HtmlWebpackPlugin({
				template: path.resolve(__dirname, 'public', 'index.html'),
			}),
			isDev && new webpack.ProgressPlugin(),
		].filter(Boolean),
		devtool: isDev && 'inline-source-map',
		devServer: isDev
			? ({
					port: env.port || 3000,
					open: true,
			  } as DevServerConfiguration)
			: undefined,
	}
	return config
}
