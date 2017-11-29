/**
Copyright (c) 2017 iizuka

This software is released under the MIT License.
http://opensource.org/licenses/mit-license.php

コピーするときはこのlicenseコメント残してください
*/

var gulp=require("gulp")
// ,concat=require("gulp-concat")
// ,print=require('gulp-print')
,config = require('../config');

gulp.task('watch',function(){
    gulp.watch(config.watch.root,config.watch.options,["reload"]);
    // gulp.watch(config.compass.src,config.watch.options,["compass"]);
    gulp.watch(config.sass.src,config.watch.options,["sass"]);

    // gulp.watch(config.concat.src, config.watch.options,  ["concat"]);
    gulp.watch(config.webpack.src, config.watch.options,  ["webpack"]);

    gulp.watch(config.ejs.src, config.watch.options,  ["ejs"]);
    gulp.watch(config.ejs.srcAll, config.watch.options,  ["ejsAll"]);

    gulp.watch(config.imagemin.src, config.imagemin.options,  ["imagemin"]);
});