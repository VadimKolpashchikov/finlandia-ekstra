const gulp = require('gulp')
const { src, series, parallel, dest } = require('gulp')
const postcss = require('gulp-postcss')
const concat = require('gulp-concat')
const terser = require('gulp-terser')  // минифицирует js
const cssnano = require('cssnano')  // минифицирует css
const autoprefixer = require('gulp-autoprefixer')
const babel = require('gulp-babel');

const paths = {
    styles: {
        src1: 'web/styles/kit.css',
        src2: 'web/styles/style.css',
        dest: 'web/styles/'
    },
    scripts: {
        src1: 'web/scripts/kit.js',
        src2: 'web/scripts/custom.js',
        dest: 'web/scripts/'
    }
}

function cssTask_1() {
    return src(paths.styles.src1)
        .pipe(concat('kit.min.css'))
        .pipe(autoprefixer({cascade: false}))
        .pipe(postcss([cssnano()]))
        .pipe(dest(paths.styles.dest))
}

function cssTask_2() {
    return src(paths.styles.src2)
        .pipe(concat('style.min.css'))
        .pipe(autoprefixer({cascade: false}))
        .pipe(postcss([cssnano()]))
        .pipe(dest(paths.styles.dest))
}

function jsTask_1() {
    return src(paths.scripts.src1)
        .pipe(concat('kit.min.js'))
        .pipe(babel({
            presets: ['@babel/env']
        }))
        .pipe(terser())
        .pipe(dest(paths.scripts.dest))
}

function jsTask_2() {
    return src(paths.scripts.src2)
        .pipe(concat('custom.min.js'))
        .pipe(babel({
            presets: ['@babel/env']
        }))
        .pipe(terser())
        .pipe(dest(paths.scripts.dest))
}

exports.css = series(
    parallel(cssTask_1, cssTask_2)
)
exports.js = series(
    parallel(jsTask_1, jsTask_2)
)
exports.build = series(
    parallel(cssTask_1, cssTask_2, jsTask_1, jsTask_2)
)