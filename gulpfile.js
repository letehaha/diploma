var gulp 		= require('gulp'),
    browserSync = require('browser-sync'),
    sass 		= require('gulp-sass'),
    concat      = require('gulp-concat'),
    uglify      = require('gulp-uglifyjs'),
    cssnano     = require('gulp-cssnano'),
    rename      = require('gulp-rename'),
    del         = require('del'),
    autoprefixer= require('gulp-autoprefixer'),
    htmlmin     = require('gulp-htmlmin'),
    ignore      = require('gulp-ignore'),
    imagemin 	= require('gulp-imagemin');

gulp.task('sass', function(){
	return gulp.src('app/scss/main.scss')
		.pipe(sass())
		.pipe(autoprefixer())
		.pipe(gulp.dest('app/css'))
		.pipe(browserSync.reload({stream: true}))
});

gulp.task('browser-sync', function(){
	browserSync({
		server: {
			baseDir : 'app'
		},
		notify: false
	})
});

gulp.task('scripts', function() {
    return gulp.src([ // Take all libraries
        'app/libs/jquery/dist/jquery.min.js', // jQuery
        'app/libs/animate/animate-css.js', // Animate
        'app/libs/magnific-popup/magnificPopup.min.js', // magnificPopup
        'app/libs/scroll2id/PageScroll2id.min.js' // PageScroll2id
        // 'app/libs/lazysizes/lazysizes.min.js'
        ])
        .pipe(concat('libs.min.js')) // Concat in a new file libs.min.js
        .pipe(uglify()) // Compress
        .pipe(gulp.dest('app/js')); // Dest in app/js
});


gulp.task('css-libs', function() {
    return gulp.src([ // Take all the css files and minify
    	'app/libs/animate/animate.min.css',
    	'app/libs/font-awesome/font-awesome.min.css',
    	'app/libs/magnific-popup/magnific-popup.min.css'
    	]) 
    	.pipe(concat('libs.min.css')) // Concat the new file libs.min.css
        .pipe(cssnano()) // Compress
        .pipe(gulp.dest('app/css')); // Dest in app/css
});

gulp.task('css-files', function() {
    return gulp.src([ // Take all the css files and minify
        'app/css/reset.css',
        'app/css/main.css',
        'app/css/media.css',
        'app/css/libs.min.css'
        ])
        .pipe(concat('style.min.css')) // Concat the new file libs.min.css
        .pipe(cssnano()) // Compress
        .pipe(gulp.dest('app/css')); // Dest in app/css
});

gulp.task('watch', ['browser-sync', 'sass', 'scripts', 'css-libs'], function(){
	gulp.watch('app/scss/**/*.scss', ['sass']);
	gulp.watch('app/*.html', browserSync.reload);
    gulp.watch('app/*.сss', browserSync.reload);
	gulp.watch('app/js/**/*.js', browserSync.reload);
});

gulp.task('clean', function() {
    return del.sync('dist'); // Delete folder dist before build
});

gulp.task('build', ["clean","scripts","sass", "css-files"], function() {

    var buildCss = gulp.src('app/css/style.min.css') // Dest css in production
    .pipe(cssnano())
    .pipe(gulp.dest('dist/css'))

    var buildFonts = gulp.src('app/fonts/**/*') // Dest fonts in production
    .pipe(gulp.dest('dist/fonts'))

    // var buildPhp = gulp.src('app/php/**/*') // Dest php in production
    // .pipe(gulp.dest('dist/php'))

    var buildLanguage = gulp.src('app/ru/**/*')
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest('dist/ru'))
    
    var buildImage = gulp.src(['app/img/**/*', '!./app/img/bg/bg-header.jpg']) // Dest img in production
    .pipe(imagemin())
    .pipe(gulp.dest('dist/img'))

    var buildJs = gulp.src('app/js/**/*') // Dest js in production
    .pipe(gulp.dest('dist/js'))

    var buildHtml = gulp.src('app/*.html') // Dest HTML in production
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest('dist'));

});