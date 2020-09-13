const gulp = require('gulp');
const plumber = require('gulp-plumber');
const less = require('gulp-less');
const postcss = require('gulp-postcss');
const autoprefixer = require("autoprefixer");
const minify = require("gulp-csso");
const rename = require("gulp-rename");


// Работаем со стилями

module.exports = function styles() {
  return gulp.src('source/static/styles/styles.less')
    .pipe(plumber())
    .pipe(less())
    .pipe(postcss([
      autoprefixer({
        overrideBrowserslist: ['last 3 versions'],
        cascade: false
      })
    ]))
    .pipe(gulp.dest('build/static/css'))
    .pipe(minify())
    .pipe(rename("style.min.css"))
    .pipe(gulp.dest("build/static/css"))
};