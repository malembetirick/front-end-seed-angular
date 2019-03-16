"use strict";
import swPrecache from 'sw-precache';

export default (config) => {
    return function generate_sw_task (done) {
        const rootDir = config.dest;
        const connect = config.connect;
        swPrecache.write(`${rootDir}/sw.js`, {
            staticFileGlobs: [rootDir + '/**/*.{js,html,css,png,jpg,gif,svg,eot,ttf,woff,woff2,otf}'],
            stripPrefix: rootDir,
            maximumFileSizeToCacheInBytes: 8097152
        }, () => {
            if(connect){
                connect.reload();
            }
            done();
        });
    };
};

