const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
	entry: {
		popup: "./src/extension/popup.js",
		options: "./src/extension/options.js",
		background: "./src/extension/background.js"
	},
	output: {
		path: path.join(__dirname, "dist"),
		filename: "[name].bundle.js"
	},
	module: {
		rules: [
			{
				test: /\.css$/,
				loader: "style-loader!css-loader",
				exclude: /(node_modules|bower_components)/,
			},
			{
				test: /\.html$/,
				loader: "html-loader",
				exclude: /(node_modules|bower_components)/,
			},
			{
				test: /\.jsx?$/,
				loader: "babel-loader",
				exclude: /(node_modules|bower_components)/,
			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: path.join(__dirname, "src", "index.html"),
			filename: "popup.html",
			chunks: ["popup"]
		}),
		new HtmlWebpackPlugin({
			template: path.join(__dirname, "src", "index.html"),
			filename: "options.html",
			chunks: ["options"]
		}),
		new CopyWebpackPlugin([
			{ from: "src/extension/manifest.json" }
		])
	],
	devtool: 'source-map'
};