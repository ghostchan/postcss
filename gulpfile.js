var gulp=require('gulp');
var postcss=require('gulp-postcss');
var autoprefixer=require('autoprefixer');
gulp.task('styles',function(){
    gulp.src('src/*.css')
    .pipe(postcss([autoprefixer]))
    .pipe(gulp.dest('dest/'));
});