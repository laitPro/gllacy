'use strict'

module.exports = function($) {
  $.gulp.task('img.sprite.svg', function () {
    return $.gulp.src($.path.imgs.decorate_svg)
      .pipe($.gp.svgmin({
        js2svg: {
          pretty: true
        }
      }))
      .pipe($.gp.svgSprite2({
        mode: "symbols",
        preview: false
      }))
      .pipe($.gp.cheerio({
        run: function ($) {
          $('svg').attr('style', 'display:none');   
        },
        parserOptions: {xmlsMode: true}
      }))
      .pipe($.gp.replaceStr('&gt;', '>'))
      .pipe($.gp.rename('symbols.svg.pug'))
      .pipe($.gulp.dest('./app/template/blocks/'));
    });
}