/**
Copyright (c) 2017 iizuka

This software is released under the MIT License.
http://opensource.org/licenses/mit-license.php
*/

var gulp=require("gulp")
,print=require('gulp-print')
,changed=require('gulp-changed')
,ejs=require("gulp-ejs")
,fs=require('fs')
,configFilePath = require('../configFile')
,config = require(configFilePath);


gulp.task("ejs", function() {
    var json = JSON.parse(fs.readFileSync(config.ejs.json));

    gulp.src(config.ejs.src,config.ejs.srcOptions)
        .pipe(changed( config.ejs.dst, {extension:'.html'} ))
        .pipe(print())
        .pipe(ejs({pageData:json}, {}, {ext: '.html'}))
        .pipe(gulp.dest(config.ejs.dst));
});

gulp.task("ejsAll", function() {
    var json = JSON.parse(fs.readFileSync(config.ejs.json));
    
    gulp.src(config.ejs.src,config.ejs.srcOptions)
        .pipe(print())
        .pipe(ejs({pageData:json}, {}, {ext: '.html'}))
        .pipe(gulp.dest(config.ejs.dst));
});