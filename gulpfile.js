var gulp = require('gulp');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var jshint = require('gulp-jshint');
var cssmin = require('gulp-cssmin');
var uncss = require('gulp-uncss');
var imgmin = require('gulp-imagemin');
var htmlmin = require('gulp-htmlmin');
var deploy = require('gulp-gh-pages');
var glob = require('glob');
var inlinecss = require('gulp-inline-css');
var jpegtran = require('imagemin-jpegtran');
var optipng = require('imagemin-optipng');
var pngcrush = require('imagemin-pngcrush');

gulp.task('html', function() {
	return gulp.src('*.html')
	.pipe(htmlmin({collapseWhitespace: true}))
	.pipe(inlinecss())
	.pipe(gulp.dest('dist'));
});

gulp.task('viewshtml', function() {
	return gulp.src('views/*.html')
	.pipe(htmlmin({collapseWhitespace: true}))
	.pipe(gulp.dest('dist/views/'));
});

gulp.task('png', function() {
	return gulp.src('img/*.png')
	.pipe(imgmin({
		use: [pngcrush()]
	}))
	.pipe(gulp.dest('dist/img/'));
});

gulp.task('viewspng', function() {
	return gulp.src('views/images/*.png')
	.pipe(imgmin({
		use: [pngcrush()]
	}))
	.pipe(gulp.dest('dist/views/images/'));
});

gulp.task('jpg', function() {
	return gulp.src('img/*.jpg')
	.pipe(imgmin({
		progressive: true,
		use: [pngcrush()]
	}))
	.pipe(gulp.dest('dist/img/'));
});

gulp.task('viewsjpg', function() {
	return gulp.src('views/images/*.jpg')
	.pipe(imgmin({
		progressive: true,
		use: [pngcrush()]
	}))
	.pipe(gulp.dest('dist/views/images/'));
});

gulp.task('scripts', function() {
	return gulp.src('js/*.js')
	.pipe(concat('perfmatters.js'))
	.pipe(uglify())
	.pipe(gulp.dest('dist/js/'));
});

gulp.task('viewsscripts', function() {
	return gulp.src('views/js/*.js')
	.pipe(uglify())
	.pipe(gulp.dest('dist/views/js/'));
});

gulp.task('css', function() {
	return gulp.src('css/*.css')
	.pipe(uncss({html: glob.sync('*.html') }))
	.pipe(cssmin())
	.pipe(gulp.dest('dist/css/'));
});

gulp.task('viewscss', function() {
	return gulp.src('views/css/*.css')
	.pipe(concat('style.css'))
	.pipe(cssmin())
	.pipe(gulp.dest('dist/views/css/'));
});

gulp.task('jshint', function() {
	return gulp.src('js/*.js')
	.pipe(jshint())
	.pipe(jshint.reporter('default'));
});

gulp.task('viewsjshint', function() {
	return gulp.src('views/js/*.js')
	.pipe(jshint())
	.pipe(jshint.reporter('default'));
});

gulp.task('deploy', function() {
	return gulp.src("./dist/**/*")
	.pipe(deploy())
});

gulp.task('watch', function() {
	gulp.watch('js/*.js') ['scripts'];
	gulp.watch('css/*.css') ['css'];
	gulp.watch('*.html') ['html'];
});

gulp.task('build', ['jshint', 'scripts','css','html', 'png','jpg']);
gulp.task('viewsbuild', ['viewsjshint', 'viewsscripts','viewscss','viewshtml', 'viewspng','viewsjpg']);

gulp.task('default', ['build','watch']);