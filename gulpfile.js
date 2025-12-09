'use strict';

const gulp = require('gulp');
const less = require('gulp-less');

function build() {
    return gulp.src('./less/*.less') // Only top-level LESS files in the less folder
        .pipe(less({ compress: true })) // Sets the output to be compressed
        .on('error', function (err) {
            console.error('LESS compilation error:', err.message);
            this.emit('end');
        })
        .pipe(gulp.dest('./styles')); // The output folder destination
};

exports.build = build;
exports.watch = function () {
    gulp.watch('./less/**/*.less', build); // Watch all LESS files in the less folder and subfolders
};