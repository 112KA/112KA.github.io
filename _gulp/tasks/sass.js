/**
Copyright (c) 2017 iizuka

This software is released under the MIT License.
http://opensource.org/licenses/mit-license.php
*/

var gulp=require("gulp")
,sass=require('gulp-sass')
,path = require('path')
,plumber=require('gulp-plumber')
,pleeease=require('gulp-pleeease')
,print=require('gulp-print')
,configFilePath = require('../configFile')
,config = require(configFilePath);



gulp.task("sass", function() {

    gulp.src(config.sass.src)
      // .pipe(print())
      .pipe(plumber())
      .pipe(sass(config.sass.options))
      .on('error', function(error) {
        // Would like to catch the error here
        console.log(error);
        this.emit('end');
      })
      .pipe(pleeease(config.pleeease.options))
      .pipe(gulp.dest(config.sass.dst));
        
});