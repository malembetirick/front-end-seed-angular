import gulp from "gulp";
import concat from "gulp-concat";
import replace from "gulp-replace";
import plumber from "gulp-plumber";

export default (config) => {
    return function css_vendor () {
        const connect = config.connect;
        const stream = gulp.src(config.src)
            .pipe(plumber())
            .pipe(replace('?v=4.7.0', ''))
            .pipe(concat('vendors.min.css'))
            .pipe(gulp.dest(config.dest));
        if(connect){
            stream.pipe(connect.reload());
        }
        return stream;
    };
};

