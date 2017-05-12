let WebpackDevServer = require("webpack-dev-server");
let webpack = require("webpack");
let webpackConfig = require("./webpack.config.js");

let compiler = webpack(webpackConfig);
let server = new WebpackDevServer(compiler, {});
server.listen(3333, "localhost", function() {});
