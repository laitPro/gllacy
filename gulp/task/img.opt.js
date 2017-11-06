'use strict';

module.exports = function($) {
  $.gulp.task('img.opt', function() {
    return $.combine(
    	$.gulp.src($.path.imgs.content, {
    		since: $.gulp.lastRun('img.opt')
    	}),
    	$.gp.imagemin({optimizationLevel: 5}),
		$.gulp.dest($.config.root + '/imgs/content/')
    )
  });
};