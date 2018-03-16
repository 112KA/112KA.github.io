/**
Copyright (c) 2017 iizuka

This software is released under the MIT License.
http://opensource.org/licenses/mit-license.php
*/

var gulp=require("gulp")
,concat=require("gulp-concat")
,print=require('gulp-print')
,configFilePath = require('../configFile')
,config = require(configFilePath);

gulp.task("concat", function() {
	for(var i=0; i<config.concat.list.length; i++) {
      gulp.src(config.concat.list[i].src)
        .pipe(print())
        .pipe(concat(config.concat.list[i].target))
        .pipe(gulp.dest(config.concat.list[i].dst));
	}
});