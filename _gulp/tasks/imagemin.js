/**
Copyright (c) 2017 iizuka

This software is released under the MIT License.
http://opensource.org/licenses/mit-license.php

コピーするときはこのlicenseコメント残してください
*/

var gulp=require("gulp")
,imagemin=require('gulp-imagemin')
,changed=require('gulp-changed')
// ,pngquant=require('imagemin-pngquant')
,mozjpeg  = require('imagemin-mozjpeg')
,config = require('../config');

gulp.task( 'imagemin', function(){
	var options = [
		// pngquant(config.imagemin.options.pngquant),
		imagemin.jpegtran({progressive:true}),
		// mozjpeg(config.imagemin.options.mozjpeg),
		imagemin.optipng(config.imagemin.options.optipng),
		imagemin.svgo(),
		imagemin.gifsicle()
	];

  gulp.src( config.imagemin.src )
    .pipe(changed( config.imagemin.dst ))
    .pipe(imagemin(options))
    .pipe(gulp.dest( config.imagemin.dst ));
});

gulp.task( 'imagemin-optimize', function(){
	var options = [
		// pngquant(config.imagemin.options.pngquant),
		// imagemin.jpegtran({progressive:true}),
		mozjpeg(config.imagemin.options.mozjpeg),
		imagemin.optipng(config.imagemin.options.optipng),
		imagemin.svgo(),
		imagemin.gifsicle()
	];

  gulp.src( config.imagemin.src )
    .pipe(changed( config.imagemin.dst ))
    .pipe(imagemin(options))
    .pipe(gulp.dest( config.imagemin.dst ));
});