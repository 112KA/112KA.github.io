/**
Copyright (c) 2017 iizuka

This software is released under the MIT License.
http://opensource.org/licenses/mit-license.php

コピーするときはこのlicenseコメント残してください
*/

var _src = "../_develop/",
_libs = "../_libs/",
_dst = "../htdocs/"
,path = require('path')
,packageImporter = require('node-sass-package-importer');

module.exports = {
	browserSync:{
		options:{
			server:{
				baseDir:_dst
			}
			// proxy:"testyahoovt"
		} 
	},
	watch:{
		root:_dst+"**/*.+(css||js||html||php)",
		options: {
			interval:500,
			debounceDelay:10000
		}
	},
	sass:{
		src:_src+"**/*.scss",
		options:{
			outputStyle: 'expanded',
			importer: packageImporter({
                extensions: ['.scss', '.css']
            }),
		},
		dst:_dst
	},
	pleeease: {
		options:{
		      browsers  : ['last 2 version', 'ie 8', 'ie 9', 'Android 4'],
		      sourcemaps: false,
		      mqpacker  : false,
		      minifier  : false
		}
	},
	imagemin:{
		src:_src+"**/*.+(jpg|jpeg|png|gif|svg)",
		options:{
			pngquant:{
				quality: '65-80',
				speed: 1,
				floyd:0
        	},
        	optipng:{optimizationLevel: 5},
        	mozjpeg:{
				quality:80,
				progressive: true
        	}
		},
		dst:_dst
	},
	ejs:{
		json:_src+"ejs.json",
		src:[_src+"**/*.ejs", '!'+_src+"**/_*.ejs"],
		srcAll:[_src+"**/_*.ejs",_src+"ejs.json"],
		srcOptions:{base:_src},
		dst:_dst
	},
	webpack:{
		src:[_src+"**/*.+(js|vue)"],
		options:{
			// メインとなるJavaScriptファイル（エントリーポイント）
			entry: {
				"assets/js/app":"../_develop/assets/js/main.js"
				, "crashroyale/assets/js/app":"../_develop/crashroyale/assets/js/main.js"
			},
			output: {
				// 出力ファイル名
				filename : '[name].js'
			}, 
			module: {
				rules: [
					{
						test: /\.js$/,
						include: [ // use `include` vs `exclude` to white-list vs black-list
		                    // path.resolve(__dirname, "src"), // white-list your app source files
		                    require.resolve("bootstrap-vue"), // white-list bootstrap-vue
		                ],
						use: [{
							loader: 'babel-loader',
							options : {
								presets: [
									// env を指定することで、ES2017 を ES5 に変換。
									// {modules: false}にしないと import 文が Babel によって CommonJS に変換され、
									// webpack の Tree Shaking 機能が使えない
									// ['env', {
									// 	"targets": {
									//         "browsers": ["last 2 versions", "safari >= 7"]
									//       },
									// 	// 'modules': false
									// }]

									require.resolve('babel-preset-env')
								],
									
			// resolve: {
			// 	modules: ['node_modules','_gulp/node_modules']
			// },
							},
						}],
						// include: [/_gulp\/node_modules/],
						// node_modules は除外する
						exclude: /node_modules/
					},
					{
						test: /\.css/,
						loaders: [
							'style-loader', 
							{
								loader: 'css-loader',
								// オプションでCSS内のurl()メソッドの取り込みを禁止する
								options: {url: false}
							}
						]
					},
					//https://vue-loader.vuejs.org/ja/configurations/advanced.html
					{
				        test: /\.vue$/,
				        loader: 'vue-loader',
						// exclude: /node_modules/
				    }
				]
			},
			resolve: {
				// modules: ['node_modules', path.join(__dirname, 'node_modules')]
				modules: ['node_modules','_gulp/node_modules']
				, alias: {
			    	vue: 'vue/dist/vue.js'
			    }
			},
			resolveLoader:{
				modules: ['node_modules','_gulp/node_modules']
			},

			devtool: 'source-map'	// ソースマップを有効にする
		},
		dst:_dst
	},
	concat: {
		src:[_src+"**/*.js", _libs+"**/*.js"],
		list:[
			{
		        // key:"_libs\\xx\\js\\",
		        src:_libs+"xx/js/**/*.js",
		        dst:_libs+"js/",
		        target:"xx.js"
			},
			{
		        // key:"_libs\\js\\",
		        src:_libs+"js/**/*.js",
		        dst:_dst+"common/js/",
		        target:"libs.js"
			}
		]
	}
	//gulp + webpack
	//http://qiita.com/tonkotsuboy_com/items/2d4f3862e6d05dc0bea1
}