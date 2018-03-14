var gulp = require('gulp'),
    sass = require('gulp-sass'),
    rename = require('gulp-rename'),
    minifyCss = require('gulp-minify-css'),
    autoprefixer = require('gulp-autoprefixer'),
    babel = require('gulp-babel'),
    uglify = require('gulp-uglify'),
    browserSync = require('browser-sync').create();


gulp.task('dependencies', function() {
  return gulp.src('node_modules/normalize-css/normalize.css')
  .pipe(rename('_normalize.scss'))
  .pipe(gulp.dest('scss/libs'));
});

gulp.task('sass', function() {
  return gulp.src('scss/styles.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer({
        browsers: ['last 20 versions'],
        cascade: false
    }))
    .pipe(gulp.dest('./dist/css/'))
    .pipe(minifyCss())
    .pipe(rename('styles.min.css'))
    .pipe(gulp.dest('./dist/css/'));
});

gulp.task('js', function() {
  return gulp.src('js/script.js')
    .pipe(babel({
      presets: ['env']
    }))
    .on('error', function (err) {
      console.log(err);
      this.emit('end');
    })
    .pipe(rename('main.js'))
    .pipe(gulp.dest('./dist/js/'))
    .pipe(uglify())
    .pipe(rename('main.min.js'))
    .pipe(gulp.dest('./dist/js/'));
});

gulp.task('watch', function() {
    browserSync.init({
        server: "./dist/"
    });
    gulp.watch('scss/**/*.scss', ['sass']).on('change', browserSync.reload);
    gulp.watch('js/*.js', ['js']).on('change', browserSync.reload);
});

gulp.task('default', ['dependencies', 'sass'], function() {
  gulp.start('dist');
});
