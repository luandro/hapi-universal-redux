var webpack = require("webpack");
var config = require("./webpack.client.js");

config.cache = true;
config.debug = true;
config.devtool = "eval";

config.entry.unshift(
	"webpack-dev-server/client?http://localhost:8080",
	"webpack/hot/only-dev-server"
);

config.output.publicPath = "http://localhost:8080/dist/";
config.output.hotUpdateMainFilename = "update/[hash]/update.json";
config.output.hotUpdateChunkFilename = "update/[hash]/[id].update.js";

config.plugins = [
	new webpack.DefinePlugin({__CLIENT__: true, __SERVER__: false}),
	new webpack.HotModuleReplacementPlugin(),
	new webpack.NoErrorsPlugin()
];

config.module = {
	loaders: [
		{
	    	test: /\.js?$/,
		    loader: 'babel-loader',
		    exclude: /node_modules/,
		    query: {
		    	"stage": 0,
		        "plugins": ["react-transform"],
		        "extra": {
		          "react-transform": {
		            	"transforms": [{
		              		"transform": "react-transform-hmr",
		              		"imports": ["react"],
		             		"locals": ["module"]
		            	}, {
		              	"transform": "react-transform-catch-errors",
		              	"imports": ["react", "redbox-react"]
		            	}]
		          	}
		        }
		    }
	    },
	    {include: /\.json$/, loaders: ["json-loader"]}
	]
};

config.devServer = {
	publicPath:  "http://localhost:8080/dist/",
	contentBase: "./static",
	hot:         true,
	inline:      true,
	lazy:        false,
	quiet:       true,
	noInfo:      false,
	headers:     {"Access-Control-Allow-Origin": "*"},
	stats:       {colors: true},
	host:        "0.0.0.0"
};

module.exports = config;
