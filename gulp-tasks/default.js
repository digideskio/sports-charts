const gulp = require('gulp')
const argv = require('yargs').argv

const chartPath = `charts/${argv.chart}`

gulp.task('default', ['dev'], () => {
	gulp.watch(`src/${chartPath}/css/**/*.styl`, ['css-chart-dev'])
	gulp.watch(`src/${chartPath}/js/**/*.js`, ['js-chart-dev'])
	gulp.watch(`src/${chartPath}/chart.html`, ['html-chart-dev'])

	gulp.watch('src/utils/**/*.js', ['js-chart-dev'])
	gulp.watch('src/base/css/**/*.styl', ['css-base-dev'])
	gulp.watch('src/base/js/**/*.js', ['js-base-dev'])

	gulp.watch('dev/**/*', ['browser-sync-reload'])
	gulp.watch('preview.html', ['browser-sync-reload'])

	gulp.watch('test-data/*.*', ['html-preview'])

	gulp.watch('src/common/css/**/*.styl', ['css-common-dev'])
	gulp.watch('src/common/js/**/*.js', ['js-common-dev'])
})
