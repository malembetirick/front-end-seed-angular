"use strict";
import gulp from "gulp";
import plumber from "gulp-plumber";

export default (config) => {
    const result_function = function copy() {
        const connect = config.connect;
        const stream = gulp.src(config.src)
            .pipe(plumber())
            .pipe(gulp.dest(config.dest));
        if (connect) {
            stream.pipe(connect.reload());
        }
        return stream;
    };

    // Change the function name in gulp logs if provided as option
    if(config.task_name){
        Object.defineProperty(result_function, "name", { value: config.task_name });
    }

    return result_function;
};