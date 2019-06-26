/**
Copyright (c) 2018 iizuka

This software is released under the MIT License.
http://opensource.org/licenses/mit-license.php
*/

var gulp = require("gulp")
    , config = require('../config')
    , $ = config.$;

gulp.task("html", function () {

    return gulp.src(config.html.src)
        .pipe($.revTimestamp(config.html.options))
        .pipe(gulp.dest(config.html.dst));

});