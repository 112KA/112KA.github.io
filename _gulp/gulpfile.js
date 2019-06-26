/**
Copyright (c) 2017 iizuka

This software is released under the MIT License.
http://opensource.org/licenses/mit-license.php
*/


var gulp = require("gulp")
	, requireDir = require("require-dir")

// ディレクトリ以下を再帰的に検索
requireDir("./tasks", { recurse: true })

gulp.task('default', gulp.parallel(
	'watch',
	'sass',
	// 'webpack',
	'imagemin',
	'browser-sync',
	// ,'ejs','ejsAll'
	// ,'concat'	//concat使うときはgulp-concatをnpm install
))