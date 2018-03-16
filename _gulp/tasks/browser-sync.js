/**
Copyright (c) 2017 iizuka

This software is released under the MIT License.
http://opensource.org/licenses/mit-license.php
*/

var gulp=require("gulp")
,browserSync=require("browser-sync")
,configFilePath = require('../configFile')
,config = require(configFilePath);

 
gulp.task("browser-sync", function() {
    browserSync(config.browserSync.options);
});


// Reload all Browsers
gulp.task('reload', function () {
    browserSync.reload();
});