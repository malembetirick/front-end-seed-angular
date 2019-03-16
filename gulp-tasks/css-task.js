"use strict";
import gulp from "gulp";
import sass from "gulp-sass";
import concat from "gulp-concat";
import plumber from "gulp-plumber";

export default (config) => {
    return function css() {
        const connect = config.connect;
        const stream = gulp.src(config.src)
            .pipe(plumber())
            .pipe(sass())
            .pipe(concat('style.min.css'))
            .pipe(gulp.dest(config.dest));
        if(connect){
            stream.pipe(connect.reload());
        }
        return stream;
    };
};