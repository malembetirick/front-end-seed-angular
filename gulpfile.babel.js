import gulp from "gulp";
import connect from "gulp-connect";

import html_task from "./gulp-tasks/html-task";
import copy_task from "./gulp-tasks/copy-task";
import css_task from "./gulp-tasks/css-task";
import css_vendor_task from "./gulp-tasks/css_vendor-task";
import generate_sw_task from "./gulp-tasks/generate_sw-task";
import js_vendors_task from "./gulp-tasks/js_vendors-task";
import js_task from "./gulp-tasks/js-task";

const lib_path = "node_modules";
const dest_folder = './dist/';

const css_deps = [`${lib_path}/font-awesome/css/font-awesome.min.css`];
const js_deps = ["angular", "@uirouter/angularjs"];

const config = {connect : connect};
const html = html_task({...config, src: ['src/**/*.html'], dest: dest_folder});
const css = css_task({...config, src: ["src/app/base.sass"], dest: dest_folder + "/app/"});
const asset = copy_task({...config, src: ["src/asset/**/*.*"], dest: dest_folder + "/asset", task_name : "asset"});
const font = copy_task({
    ...config,
    src: [`${lib_path}/font-awesome/fonts/*.*`],
    dest: `${dest_folder}/fonts`,
    task_name : "font"
});
const vendors_css = css_vendor_task({...config, src: css_deps, dest: dest_folder});
const generate_service_worker = generate_sw_task({...config, dest: dest_folder});
const vendors_js = js_vendors_task({...config, dest: dest_folder, vendors: js_deps});
const js = js_task({...config, vendors: js_deps, src: ['./src/app/app.js'], dest: dest_folder});
const start_server = (cb) => {
    connect.server({
        root: ["dist"],
        livereload: true,
        base: 'http://localhost',
        port: 5000
    });
    connect.reload();
    gulp.watch('./src/**/*.sass', css);
    gulp.watch('./src/**/*.html', html);
    gulp.watch('./src/**/*.js', js);
    cb();
};

const build = gulp.series(html, css, vendors_css, font, asset, vendors_js, js);
const watch = gulp.series(html, css, vendors_css, font, asset, vendors_js, js, start_server);


export {
    html, css, vendors_css, font, asset, vendors_js, js, build, watch
}