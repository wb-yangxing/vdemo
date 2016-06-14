// nodejs 中的path模块
var path = require('path');
var fs = require('fs');
var glob = require('glob');
var HtmlWebpackPlugin = require('html-webpack-plugin');
/**
	entry: 入口
	plugin_html： 生产的html文件配置
	plugin_html_dev： 开发环境的html文件配置
*/
var entries = {}, plugin_html = [], plugin_html_dev = [];


var pagePath = "pages", sep = path.sep;
// 获取页面列表
// var pageList = fs.readdirSync(pagePath);
// pageList.forEach(function (page) {
// 	// 页面中文件列表
//     var fileList = fs.readdirSync([pagePath, page].join(sep));
//     fileList.forEach(function (file, index) {
//     	var filePath = [pagePath, page, file].join(sep);
//     	var stats = fs.statSync(filePath);
//     	if(stats.isFile()){
// 			var extname = path.extname(filePath);
// 			var basename = path.basename(filePath);
// 			if(extname == ".js"){
// 				!entry[page] && (entry[page] = []);
// 			 	entry[page].push(path.resolve(__dirname, '../' + filePath));
// 			}else if(extname == ".html"){
// 				// pro html
// 				plugin_html.push(new HtmlWebpackPlugin({
// 				    filename: '../' + basename,
// 				    template: path.resolve(__dirname, '../'+filePath),
// 				    chunks:[commonName, page],
// 				    inject: true
// 				}))
// 				// dev html
// 				plugin_html_dev.push(new HtmlWebpackPlugin({
// 				    filename: './' + basename,
// 				    template: path.resolve(__dirname, '../'+filePath),
// 				    chunks:[commonName, page],
// 				    inject: true
// 				}))
// 			}
// 		}
//     })
// })
// 所有单个入口对应
entries = getEntry('pages/**/*.js');

// 公告模块放到路口里面
var commonName = "vendors";
entries[commonName] = ["vue"];

var pages = Object.keys(getEntry('pages/**/*.html'));
pages.forEach(function(pathname) {
    var conf = {
        template: path.resolve(__dirname, '../'+pathname + '.html'), //html模板路径
        minify: { //压缩HTML文件
            removeComments: true, //移除HTML中的注释
            collapseWhitespace: false //删除空白符与换行符
        }
    };
    if (pathname in entries) {
        conf.inject = true;
        conf.chunks = ['vendors', pathname];
    }
    var configDev = conf, configPro = conf;
    configDev.filename =  './' + pathname + '.html'; //生成的dev html存放路径，相对于path
    configPro.filename =  '../' + pathname + '.html'; //生成的html存放路径，相对于path

    plugin_html_dev.push(new HtmlWebpackPlugin(configDev));
    plugin_html.push(new HtmlWebpackPlugin(configPro));
});

module.exports = {
	commonName: commonName,
	entry: entries,
	htmlPlugun: plugin_html,
	htmlPlugunDev: plugin_html_dev
};
function getEntry(globPath, pathDir) {
    var files = glob.sync(globPath);
    var entries = {},
        entry, dirname, basename, pathname, extname;
    for (var i = 0; i < files.length; i++) {
        entry = files[i];
        dirname = path.dirname(entry);
        extname = path.extname(entry);
        basename = path.basename(entry, extname);
        pathname = path.join(dirname, basename);
        pathname = pathDir ? pathname.replace(new RegExp('^' + pathDir), '') : pathname;
        entries[pathname] = './' + entry;
        // if(!entries[dirname]){
        //     entries[dirname] = [];
        // }
        // entries[dirname].push(pathDir + entry);
    }
    return entries;
}