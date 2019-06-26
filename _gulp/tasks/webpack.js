/**
Copyright (c) 2017 iizuka

This software is released under the MIT License.
http://opensource.org/licenses/mit-license.php
*/


const gulp = require("gulp");
const webpackStream = require("webpack-stream");

var config = require('../config');

gulp.task("webpack", () => {
  return gulp.src(config.webpack.entry, { allowEmpty: true })
    .pipe(config.$.plumber())
    .pipe(webpackStream(config.webpack.options))
    .on('error', function (error) {
      // Would like to catch the error here
      console.log(error);
      this.emit('end');
    })
    .pipe(gulp.dest(config.webpack.dst));
});