/**
 * Created by poiso_000 on 26/07/2016.
 */
var gulp = require('gulp');
var webpack = require('webpack-stream');

gulp.task('build', function(){
    return gulp.src('src/ts/app.ts')
        .pipe(webpack(require('./webpack.common.js')))
        .pipe(gulp.dest('build'))
});