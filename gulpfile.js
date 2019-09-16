const { src, dest, series, watch, task } = require('gulp');
const sass = require('gulp-sass');

function scss() {
    return src('./scss/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(dest('./css'));
}

function watcher() {
    watch('./scss/**/*.scss', scss);
}

exports.default = series(scss, watcher);

