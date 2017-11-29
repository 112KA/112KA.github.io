/**
Copyright (c) 2017 iizuka

This software is released under the MIT License.
http://opensource.org/licenses/mit-license.php

コピーするときはこのlicenseコメント残してください
*/


// 必要プラグインの読み込み (var gulp = ~ でも可)
const gulp = require("gulp");
const webpackStream = require("webpack-stream");
const webpack = require("webpack");	//webpack3
const rename=require('gulp-rename');
const uglify=require('gulp-uglify')
const ignore = require('gulp-ignore');

var config = require('../config');

// タスクの定義。 ()=> の部分はfunction() でも可
gulp.task("webpack", () => {
  // ☆ webpackStreamの第2引数にwebpackを渡す☆
  return webpackStream(config.webpack.options, webpack)
  	.on('error', function(error) {
        // Would like to catch the error here
        console.log(error);
        this.emit('end');
      })
    .pipe(gulp.dest(config.webpack.dst));
 //    .pipe(ignore.exclude("*.js.map"))
	// .pipe(rename({extname: '.min.js'}))
	// .pipe(uglify())
	// .pipe(gulp.dest(config.webpack.dst));
});