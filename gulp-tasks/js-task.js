import browserify from 'browserify';
import gulp from "gulp";
import buffer from 'vinyl-buffer';
import babelify from 'babelify';
import source from 'vinyl-source-stream';
import log from "fancy-log";
import minify from "gulp-babel-minify";
import strip from 'gulp-strip-comments';

module.exports = (config) => {
    return function js () {
        const vendors = config.vendors || [];
        const connect = config.connect;
        const stream = browserify({
            entries: config.src,
            extensions: ['.js'],
            debug: true
        })
            .external(vendors)
            .transform(babelify)
            .bundle()
            .on('error', function (err) {
                log.error(err.toString());
                this.emit('end');
            })
            .pipe(source('app.min.js'))
            .pipe(buffer())
            .on('error', function (err) {
                log.error(err.toString());
                this.emit('end');
            })
            .pipe(strip())
            .pipe(minify())
            .pipe(gulp.dest(config.dest));
        if(connect){
            stream.pipe(connect.reload());
        }
        return stream;
    };
};