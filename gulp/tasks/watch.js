var config 		= require('../config.js'),
		gulp 			= require('gulp');

gulp.task('watch', ['browserSync'], function() {
    
    gulp.watch( config.jade.source + '/**/*.jade', ['jade'] );
    gulp.watch( config.stylus.source + '/**/*.{styl,css}', ['stylus'] );
    gulp.watch( config.javascript.source + '/**/*.js', ['javascript'] );

});