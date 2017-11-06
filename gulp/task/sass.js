'use strict'

module.exports = function($) {
	$.gulp.task('sass', function() {
		return $.combine(
			$.gulp.src('./app/styles/app.scss'),			
			$.gp.if($.dev, $.gp.sourcemaps.init()),
			$.gp.sassGlob(),
			$.gp.sass(),
			$.gp.autoprefixer({ 
				browsers: $.config.autoprefixerConfig 
			}),
			$.gp.if($.dev, $.gp.sourcemaps.write()),
			$.gp.if(!$.dev, $.combine(
				$.gp.csso(),
				$.gp.rename({
					suffix: '.min'
				})
			)),
			$.gulp.dest($.config.root + '/css'),
			$.browserSync.stream()
		)
		.on('error', $.gp.notify.onError({
			title: 'Style'
		}))
	})
}