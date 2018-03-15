// Initialize webpack
var webpack = require("webpack");
// Initialize path that is node_modules which is available globally
var path = require("path");

// Bundled directory from where the app is served dist folder is created automatically
var DIST_DIR = path.resolve(__dirname, "dist");
// Source directory
var SRC_DIR = path.resolve(__dirname, "src");

// webpack config

/*
webpack config object starts with one or more entry points and then looks for the dependencies
*/
var config = {
	entry: SRC_DIR + "/app/index.js",
	output: {
		path: DIST_DIR + "/app",
		filename: "bundle.js",
		publicPath: "/app/"
	},
	module: {
		loaders: [{
			test: /\.js?/,
			include: SRC_DIR,
			loaders: "babel-loader",
			query: {
				presets: ["react", "es2015", "stage-2"]
			}
		}]
	}
};

// webpack will export the config object
module.exports = config;