import browserify from 'browserify';
import gulp from "gulp";
import buffer from 'vinyl-buffer';
import source from 'vinyl-source-stream';
import strip from 'gulp-strip-comments';
import plumber from "gulp-plumber";

module.exports = (config) => {
    return function js_vendor() {
        const vendors = config.vendors || [];
        const connect = config.connect;
        const b = browserify({
            debug: true
        });
        vendors.forEach(lib => {
            b.require(lib);
        });
        const stream = b.bundle()
            .pipe(plumber())
            .pipe(source('vendor.min.js'))
            .pipe(buffer())
            .pipe(strip());
        //stream.pipe(minify());
        stream.pipe(gulp.dest(config.dest));
        if(connect){
            stream.pipe(connect.reload());
        }
        return stream;
    };
};