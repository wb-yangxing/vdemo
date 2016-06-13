// nodejs 中的path模块
var path = require('path');
var fs = require('fs');
var HtmlWebpackPlugin = require('html-webpack-plugin');
/**
	entry: 入口
	plugin_html： 生产的html文件配置
	plugin_html： 生产的html文件配置
	plugin_html_dev： 开发环境的html文件配置
*/
var entry = {}, plugin_html = [], plugin_html_dev = [];

// 公告模块放到路口里面
var commonName = "vendors";
entry[commonName] = ["vue"];

var pagePath = "pages", sep = path.sep;
// 获取页面列表
var pageList = fs.readdirSync(pagePath);
pageList.forEach(function (page) {
	// 页面中文件列表
    var fileList = fs.readdirSync([pagePath, page].join(sep));
    fileList.forEach(function (file, index) {
    	var filePath = [pagePath, page, file].join(sep);
    	var stats = fs.statSync(filePath);
    	if(stats.isFile()){
			var extname = path.extname(filePath);
			var basename = path.basename(filePath);
			if(extname == ".js"){
				!entry[page] && (entry[page] = []);
			 	entry[page].push(path.resolve(__dirname, '../' + filePath));
			}else if(extname == ".html"){
				// pro html
				plugin_html.push(new HtmlWebpackPlugin({
				    filename: '../' + basename,
				    template: path.resolve(__dirname, '../'+filePath),
				    chunks:[commonName, page],
				    inject: true
				}))
				// dev html
				plugin_html_dev.push(new HtmlWebpackPlugin({
				    filename: './' + basename,
				    template: path.resolve(__dirname, '../'+filePath),
				    chunks:[commonName, page],
				    inject: true
				}))
			}
		}
    })
})

module.exports = {
	commonName: commonName,
	entry: entry,
	htmlPlugun: plugin_html,
	htmlPlugunDev: plugin_html_dev
};