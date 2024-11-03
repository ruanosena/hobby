const DotenvWebpackPlugin = require("dotenv-webpack");
const path = require("path");

/** @type {import("webpack/types").Configuration} */
module.exports = (env) => ({
	entry: "./src/index.js",
	output: {
		filename: "bundle.js",
		path: path.resolve(__dirname, "dist"),
	},
	module: {
		rules: [
			{
				test: /\.css$/i,
				use: ["style-loader", "css-loader"],
			},
		],
	},
	plugins: [env.production && new DotenvWebpackPlugin()],
});
