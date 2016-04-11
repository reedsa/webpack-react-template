// include gulp
import gulp from 'gulp';
import watch from 'gulp-watch';
import eslint from 'gulp-eslint';
import react from 'gulp-react';

const paths = {
  src: 'app',
  dest: 'build'
};

// JS hint task
gulp.task('eslint', () => {
  gulp.src(paths.src)
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError());
});

gulp.task('watch', () => {
  gulp.watch(paths.app, ['eslint'])
});

gulp.task('default', ['eslint'])
