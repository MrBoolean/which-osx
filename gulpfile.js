var gulp = require('gulp');
var eslint = require('gulp-eslint');
var istanbul = require('gulp-istanbul');
var mocha = require('gulp-mocha');

gulp.task('lint', function lint() {
  return gulp
    .src(['!node_modules/**/*', '!dist/**/*', '**/*.js'])
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError())
  ;
});

gulp.task('test.instrument', function instrument() {
  return gulp
    .src(['!node_modules/**/*', '!dist/**/*', '!gulpfile.js', '!test/**/*', '**/*.js'])
    .pipe(istanbul({
      includeUntested: true
    }))
    .pipe(istanbul.hookRequire())
  ;
});

gulp.task('test', ['test.instrument'], function test() {
  return gulp
    .src(['test/**/*.test.js'])
    .pipe(mocha({
      require: ['./test/bootstrap']
    }))
    .pipe(istanbul.writeReports({
      dir: './dist/'
    }))
  ;
});

gulp.task('default', ['lint', 'test']);
