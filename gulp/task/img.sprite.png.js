'use strict';

module.exports = function($) {
  $.gulp.task('img.sprite.png', function(cb) {

    var spriteData = $.gulp.src($.path.imgs.decorate_png).pipe($.gp.spritesmith({
      imgName: 'sprite.png',
      cssName: 'sprite.scss',
      imgPath: '../imgs/decorate/sprite/sprite.png' //img path in scss file
    }));
 
    var imgStream = spriteData.img
      .pipe($.buffer())
      .pipe($.gp.imagemin())
      .pipe($.gulp.dest($.config.root + '/imgs/decorate/sprite/'));

    var cssStream = spriteData.css
      .pipe($.gulp.dest('./app/styles/helpers/'));
 
    $.gp.merge(imgStream, cssStream); 
  
    cb();
  });
};