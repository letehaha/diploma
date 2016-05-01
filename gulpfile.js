var gulp 		= require('gulp'),
    browserSync = require('browser-sync'),
    scss 		= require('gulp-scss'),
    concat      = require('gulp-concat'),
    uglify      = require('gulp-uglifyjs'),
    cssnano     = require('gulp-cssnano'),
    rename      = require('gulp-rename'),
    del         = require('del'),
    autoprefixer= require('gulp-autoprefixer');

gulp.task('scss', function(){
    return gulp.src('app/scss/main.scss')
        .pipe(scss())
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
    return gulp.src([ // Взятие всех необходимых библиотек
        'app/libs/jquery/dist/jquery.min.js', // jQuery
        'app/libs/animate/animate-css.js', // Animate
        'app/libs/jqBootstrapValidation/jqBootstrapValidation.js', // jqBootstrapValidation
        'app/libs/magnific-popup/magnificPopup.min.js', // magnificPopup
        'app/libs/mixitup/mixitup.min.js', // mixitup
        'app/libs/parallax/parallax.min.js', // parallax
        'app/libs/respond/respond.min.js', // respond
        'app/libs/scroll2id/PageScroll2id.min.js', // PageScroll2id
        'app/libs/waypoints/waypoints.min.js' // waypoints
        ])
        .pipe(concat('libs.min.js')) // Сбор их в кучу в новом файле libs.min.js
        .pipe(uglify()) // Сжимание JS файлов
        .pipe(gulp.dest('app/js')); // Выгруз в папку app/js
});


gulp.task('css-libs', function() {
    return gulp.src([ // Выбор всех css-файлов для минификации
    	'app/libs/animate/animate.min.css',
    	'app/libs/bootstrap/bootstrap-grid.min.css',
    	'app/libs/font-awesome/font-awesome.min.css',
    	'app/libs/magnific-popup/magnific-popup.min.css'
    	]) 
    	.pipe(concat('libs.min.css'))
        .pipe(cssnano()) // Сжимание
        .pipe(gulp.dest('app/css')); // Выгруз в папку app/css
});


gulp.task('watch', ['browser-sync', 'scss', 'scripts', 'css-libs'], function(){
	gulp.watch('app/scss/**/*.scss', ['scss']);
	gulp.watch('app/*.html', browserSync.reload);
	gulp.watch('app/js/**/*.js', browserSync.reload);
});

gulp.task('clean', function() {
    return del.sync('dist'); // Удаление папки dist перед сборкой
});

gulp.task('build',['clean', 'scss', 'scripts'], function() {

    var buildCss = gulp.src('app/css/**/*.css') // Перенос css в продакшен
    // .pipe(concat('styles.css')) // Объединение всех css в один файл
    .pipe(gulp.dest('dist/css'))

    var buildFonts = gulp.src('app/fonts/**/*') // Перенос fonts в продакшен
    .pipe(gulp.dest('dist/fonts'))

    var buildFonts = gulp.src('app/php/**/*') // Перенос php в продакшен
    .pipe(gulp.dest('dist/php'))

    var buildImage = gulp.src('app/img/**/*') // Перенос img в продакшен
    .pipe(gulp.dest('dist/img'))

    var buildJs = gulp.src('app/js/**/*') // Перенос js в продакшен
    .pipe(gulp.dest('dist/js'))

    var buildHtml = gulp.src('app/*.html') // Перенос HTML в продакшен
    .pipe(gulp.dest('dist'));

});
