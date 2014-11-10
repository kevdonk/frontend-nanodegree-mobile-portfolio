var gulp = require('gulp');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var jshint = require('gulp-jshint');
var minify = require('gulp-minify-css');
var psi = require('psi');
var site = 'http://127.0.0.1:8000';


gulp.task('psi', function(cb) {
	psi({
		nokey: 'true',
		url: site,
		strategy: 'mobile',
	}, cb);
});

gulp.task('scripts', function() {
	return gulp.src('js/*.js')
	.pipe(concat('all.min.js'))
	.pipe(uglify())
	.pipe(gulp.dest('dist'));
});

gulp.task('css', function() {
	return gulp.src('css/*.css')
	.pipe(concat('all.min.css'))
	.pipe(minify())
	.pipe(gulp.dest('dist'));
});

gulp.task('jshint', function() {
	return gulp.src('js/*.js')
	.pipe(jshint())
	.pipe(jshint.reporter('default'));
});

gulp.task('watch', function() {
	gulp.watch('js/*.js') ['scripts'];
	gulp.watch('css/*.css') ['css'];
});

gulp.task('default', ['jshint','scripts','css','watch']);