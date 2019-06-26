/**
Copyright (c) 2017 iizuka

This software is released under the MIT License.
http://opensource.org/licenses/mit-license.php
*/

var gulp=require("gulp")
// ,pngquant=require('imagemin-pngquant')
,mozjpeg  = require('imagemin-mozjpeg')
,config = require('../config')
,imagemin = config.$.imagemin;

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
    .pipe(config.$.changed( config.imagemin.dst ))
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
    .pipe(config.$.changed( config.imagemin.dst ))
    .pipe(imagemin(options))
    .pipe(gulp.dest( config.imagemin.dst ));
});