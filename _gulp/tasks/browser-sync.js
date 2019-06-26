/**
Copyright (c) 2017 iizuka

This software is released under the MIT License.
http://opensource.org/licenses/mit-license.php
*/

var gulp = require("gulp")
    , browserSync = require("browser-sync")
    , config = require('../config')
    , $ = config.$;


gulp.task("browser-sync", function (done) {
    $.connectPhp.server(config.connectPhp.options, function () {
        browserSync(config.browserSync.options);
        done();
    })
});

// Reload all Browsers
gulp.task('reload', function (done) {
    browserSync.reload();
    done()
});