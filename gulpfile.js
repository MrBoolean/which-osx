var gulp = require('gulp');
var eslint = require('gulp-eslint');
var istanbul = require('gulp-istanbul');
var mocha = require('gulp-mocha');
var codeclimate = require('gulp-codeclimate-reporter');

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

gulp.task('codeclimate', function sendToCodeclimate() {
  return gulp
    .src(['dist/lcov.info'], { read: false })
    .pipe(codeclimate({
      token: '8531e0ab38af04ef87e892357f9d1418251a0cbb199428e7a0b202bbd8509c31'
    }))
  ;
});

gulp.task('default', ['lint', 'test']);
