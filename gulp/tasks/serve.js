const gulp = require('gulp');

const imageMinify = require('./imageMinify');
const svgSprite = require('./spriteSVG');
const pngSprite = require('./spritePNG');
const styles = require('./styles');
const pug2html = require('./pug');
const script = require('./scripts');

const server = require('browser-sync').create();

// Запуск сервера а также слежка за файлами

module.exports = function serve(cb) {
  server.init({
    server: 'build',
    notify: false,
    open: true,
    cors: true
  });

  gulp.watch('source/static/images/*/*.{gif,png,jpg,svg,webp}', gulp.series(imageMinify)).on('change', server.reload);
  gulp.watch('source/static/images/sprite/svg/*.svg', gulp.series(svgSprite)).on('change', server.reload);
  gulp.watch('source/static/images/sprite/png/*.png', gulp.series(pngSprite)).on('change', server.reload);
  gulp.watch('source/static/styles/**/*.less', gulp.series(styles)).on('change', server.reload);
  gulp.watch('source/static/js/**/*.js', gulp.series(script)).on('change', server.reload);
  gulp.watch('source/pug/**/*.pug', gulp.series(pug2html));
  gulp.watch('build/*.html').on('change', server.reload);

  return cb()
};