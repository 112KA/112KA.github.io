/**
Copyright (c) 2017 iizuka

This software is released under the MIT License.
http://opensource.org/licenses/mit-license.php
*/

var gulp = require("gulp")
    , config = require('../config');

gulp.task('watch', function () {
    gulp.watch(config.watch.root, gulp.task("reload"));
    gulp.watch(config.sass.src, gulp.series("sass", "html"));

    // gulp.watch(config.concat.src,  gulp.task("concat"));
    gulp.watch(config.webpack.src, gulp.series("webpack", "html"));

    gulp.watch(config.ejs.src, gulp.task("ejs"));
    gulp.watch(config.ejs.srcAll, gulp.task("ejsAll"));

    gulp.watch(config.imagemin.src, gulp.task("imagemin"));
});