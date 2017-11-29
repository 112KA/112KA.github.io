/**
Copyright (c) 2017 iizuka

This software is released under the MIT License.
http://opensource.org/licenses/mit-license.php

コピーするときはこのlicenseコメント残してください
*/


var gulp=require("gulp")
,requireDir=require("require-dir"); 

// ディレクトリ以下を再帰的に検索
requireDir("./tasks", { recurse: true });

var tasks = [
	'browser-sync',
	'watch',
	'sass',
	'webpack',
	'imagemin'
	,'ejs','ejsAll'
	// ,'concat'	//concat使うときはgulp-concatをnpm install
];
gulp.task("default", tasks);