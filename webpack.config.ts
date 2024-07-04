import HtmlWebpackPlugin from 'html-webpack-plugin'
import path from 'path'
import webpack from 'webpack'

type Mode = 'development' | 'production'

interface EnvVariables {
	mode: Mode
}

export default (env: EnvVariables) => {
	const config: webpack.Configuration = {
		mode: env.mode || 'development',
		entry: path.resolve(__dirname, 'src', 'index.ts'),
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
			new webpack.ProgressPlugin(),
		],
	}
	return config
}
