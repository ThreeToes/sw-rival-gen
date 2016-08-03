/**
 * Created by poiso_000 on 26/07/2016.
 */
var gulp = require('gulp');
var gutil = require("gulp-util");
var webpack = require('webpack-stream');
var WebpackDevServer = require("webpack-dev-server");
var webpackConfig = require("./webpack.common.js");
var jsonMinify = require('gulp-json-minify');

gulp.task("default", ["webpack-dev-server"]);

gulp.task('build',['copySpeciesJson'], function(){
    return gulp.src('src/ts/app.ts')
        .pipe(webpack(require('./webpack.common.js')))
        .pipe(gulp.dest('build/dist'))
});

gulp.task('copySpeciesJson',function () {
    return gulp.src('src/main/json/**/*.json')
        .pipe(jsonMinify())
        .pipe(gulp.dest('build/dist'));
});

gulp.task("webpack-dev-server", function(callback) {
    // modify some webpack config options
    var myConfig = Object.create(webpackConfig);
    myConfig.devtool = "eval";
    myConfig.debug = true;

    // Start a webpack-dev-server
    new WebpackDevServer(webpack(myConfig), {
        publicPath: "/" + myConfig.output.publicPath,
        stats: {
            colors: true
        }
    }).listen(8080, "localhost", function (err) {
        if (err) throw new gutil.PluginError("webpack-dev-server", err);
        gutil.log("[webpack-dev-server]", "http://localhost:8080/webpack-dev-server/index.html");
    });
});