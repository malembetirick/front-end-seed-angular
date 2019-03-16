"use strict";
import gulp from "gulp";
import html_min from "gulp-htmlmin";
import plumber from "gulp-plumber";

export default (config) => {
    return function html ()  {
        const connect = config.connect;
        const stream = gulp.src(config.src)
            .pipe(plumber())
            .pipe(html_min({collapseWhitespace: true}))
            .pipe(gulp.dest(config.dest));
        if(connect){
            stream.pipe(connect.reload());
        }
        return stream;
    }
};