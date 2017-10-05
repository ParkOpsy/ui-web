const path = require('path');

module.exports = {
	entry: './src/index.js',
	module: {
		loaders: [
			{ test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" },
			{ test: /\.jsx$/, exclude: /node_modules/, loader: "babel-loader" }
		],
	},
	output: {
		filename: 'client_bundle.js',
		path: path.resolve(__dirname, 'dist')
	}
};
