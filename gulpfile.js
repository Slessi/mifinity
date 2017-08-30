let gulp = require('gulp');

let concat = require('gulp-concat');
let uglify = require('gulp-uglify');
let templateCache = require('gulp-angular-templatecache');
let less = require('gulp-less');

gulp.task('default', ['compile:js', 'compile:css', 'compile:html']);
gulp.task('compile:js', compileJs);
gulp.task('compile:css', compileCss);
gulp.task('compile:html', compileHtml);

gulp.task('watch', ['watch:js', 'watch:css', 'watch:html']);
gulp.task('watch:js', watchJs);
gulp.task('watch:css', watchCss);
gulp.task('watch:html', watchHtml);

function compileJs() {
    return gulp
        .src([
            'node_modules/angular/angular.min.js',
            'node_modules/angular-animate/angular-animate.min.js',
            'node_modules/angular-aria/angular-aria.min.js',
            'node_modules/angular-material/angular-material.min.js',
            'node_modules/@uirouter/core/_bundles/ui-router-core.min.js',
            'node_modules/@uirouter/angularjs/release/ui-router-angularjs.min.js',
            'src/app.module.js',
            'src/**/*.js'
        ])
        .pipe(concat('scripts.min.js'))
        // .pipe(uglify())
        .pipe(gulp.dest('public'));
}

function compileCss() {
    return gulp
        .src([
            'node_modules/angular-material/angular-material.min.css',
            'src/**/*.less'
        ])
        .pipe(less())
        .pipe(concat('styles.min.css'))
        .pipe(gulp.dest('public'));
}

function compileHtml() {
    return gulp
        .src([
            'src/**/*.html'
        ])
        .pipe(templateCache('templates.js', {
            module: 'mifinity'
        }))
        .pipe(gulp.dest('public'));
}

function watchJs() {
    return gulp.watch('src/**/*.js', ['compile:js']);
}

function watchCss() {
    return gulp.watch('src/**/*.less', ['compile:css']);
}

function watchHtml() {
    return gulp.watch('src/**/*.html', ['compile:html']);
}