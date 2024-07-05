import HtmlWebpackPlugin from 'html-webpack-plugin'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import { Configuration, ProgressPlugin } from 'webpack'
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer'
import { BuildOptions } from './types/types'

export function buildPlugins(options: BuildOptions): Configuration['plugins'] {
	const isDev = options.mode === 'development'
	const plugins: Configuration['plugins'] = [
		new HtmlWebpackPlugin({
			template: options.paths.html,
		}),
	]

	if (isDev) {
		plugins.push(new ProgressPlugin())
	}

	if (!isDev) {
		plugins.push(
			new MiniCssExtractPlugin({
				filename: 'css/[name].[contenthash:8].css',
				chunkFilename: 'css/[name].[contenthash:8].css',
			})
		)
	}

	if (options.analyzer) {
		plugins.push(new BundleAnalyzerPlugin())
	}

	return plugins
}
