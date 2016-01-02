var gulp = require('gulp');
var del = require('del');
var runSequence = require('run-sequence');
var plumber = require('gulp-plumber');
var typescript = require('gulp-typescript');
var inject = require('gulp-inject');
var template = require('gulp-template');
var tslint = require('gulp-tslint');
var inlineNg2Template = require('gulp-inline-ng2-template');
var tslintStylish = require('gulp-tslint-stylish');
var shell = require('gulp-shell');
var nodemon = require('gulp-nodemon');
var karma_1 = require('karma');
var ts = require('gulp-typescript');
var sourcemaps = require('gulp-sourcemaps');
var tinylrFn = require('tiny-lr');
var config_1 = require('./tools/config');
exports.templateLocals = {
    APP_VERSION: config_1.APP_VERSION,
    APP_BASE: config_1.APP_BASE
};
var tinylr = tinylrFn();
function notifyLiveReload(changedFiles) {
    tinylr.changed({
        body: { files: changedFiles }
    });
}
exports.notifyLiveReload = notifyLiveReload;
var tsProject = ts.createProject('tsconfig.json');
function compileTs(src, dest, inlineTpl) {
    var result = gulp.src(src)
        .pipe(plumber())
        .pipe(sourcemaps.init());
    if (inlineTpl) {
        result = result.pipe(inlineNg2Template({ base: config_1.PATH.src.base }));
    }
    return result.pipe(typescript(tsProject))
        .js.pipe(sourcemaps.write())
        .pipe(gulp.dest(dest));
}
function lintTs(src) {
    return gulp.src(src)
        .pipe(tslint())
        .pipe(tslint.report(tslintStylish));
}
function startKarma(singleRun) {
    if (singleRun === void 0) { singleRun = true; }
    new karma_1.Server({
        configFile: config_1.PATH.cwd + "/karma.conf.js",
        singleRun: singleRun
    }).start();
}
// --------------
// Client.
gulp.task('font.build', function () {
    return gulp.src(config_1.PATH.src.font)
        .pipe(gulp.dest(config_1.PATH.dest.app.font));
});
gulp.task('jslib.build', function () {
    var jslibSrc = gulp.src(config_1.DEPS_SRC)
        .pipe(gulp.dest(config_1.PATH.dest.app.lib));
    var srcRxjs = gulp.src('node_modules/rxjs/**/*')
        .pipe(gulp.dest(config_1.PATH.dest.app.lib + '/rxjs'));
    return [jslibSrc, srcRxjs];
});
gulp.task('jslib.watch', ['jslib.build'], function () {
    return gulp.watch(config_1.DEPS_SRC, function (evt) {
        return runSequence('jslib.build', function () { return notifyLiveReload([evt.path]); });
    });
});
gulp.task('css.build', function () {
    return gulp.src(config_1.PATH.src.css)
        .pipe(gulp.dest(config_1.PATH.dest.app.component));
});
gulp.task('css.watch', ['css.build'], function () {
    return gulp.watch(config_1.PATH.src.css, function (evt) {
        return runSequence('css.build', function () { return notifyLiveReload([evt.path]); });
    });
});
gulp.task('tpl.build', function () {
    return gulp.src(config_1.PATH.src.tpl)
        .pipe(gulp.dest(config_1.PATH.dest.app.component));
});
gulp.task('tpl.watch', ['tpl.build'], function () {
    return gulp.watch(config_1.PATH.src.tpl, function (evt) {
        return runSequence('tpl.build', function () { return notifyLiveReload([evt.path]); });
    });
});
gulp.task('ts.build', function () {
    return compileTs(config_1.PATH.src.ts, config_1.PATH.dest.app.base);
});
gulp.task('ts.watch', ['ts.build'], function () {
    return gulp.watch(config_1.PATH.src.ts, function (evt) {
        runSequence('ts.build', function () { return notifyLiveReload([evt.path]); });
    });
});
gulp.task('index.build', function () {
    var rDistPath = new RegExp("^/" + config_1.PATH.dest.app.base);
    function transformPath(filepath) {
        arguments[0] = filepath.replace(rDistPath, '');
        return inject.transform.apply(inject.transform, arguments);
    }
    function mapPath(dep) {
        return dep.dest + "/" + dep.src.split('/').pop();
    }
    var injectablesDependenciesRef = config_1.PATH.src.deps
        .filter(function (dep) { return dep['inject']; })
        .map(mapPath);
    return gulp.src(config_1.PATH.src.index)
        .pipe(inject(gulp.src(injectablesDependenciesRef, { read: false }), {
        transform: transformPath
    }))
        .pipe(template(exports.templateLocals))
        .pipe(gulp.dest(config_1.PATH.dest.app.base));
});
gulp.task('index.watch', ['index.build'], function () {
    return gulp.watch(config_1.PATH.src.index, function (evt) {
        return runSequence('index.build', function () { return notifyLiveReload([evt.path]); });
    });
});
gulp.task('build', ['dist.clean'], function (done) {
    return runSequence([
        'font.build',
        'jslib.build',
        'css.build',
        'tpl.build',
        'tslint',
        'ts.build'
    ], 'index.build', done);
});
gulp.task('build.watch', ['dist.clean'], function (done) {
    return runSequence([
        'font.build',
        'jslib.watch',
        'css.watch',
        'tpl.watch',
        'tslint.watch',
        'ts.watch',
    ], 'index.watch', done);
});
// --------------
// Serve.
gulp.task('server.watch', function () {
    nodemon({
        script: 'server/bootstrap.ts',
        watch: 'server',
        ext: 'ts',
        env: { 'profile': process.env.profile },
        execMap: {
            ts: 'ts-node'
        }
    }).on('restart', function () {
        process.env.RESTART = true;
    });
    tinylr.listen(config_1.LIVE_RELOAD_PORT);
});
gulp.task('serve', function (done) {
    return runSequence('build.watch', 'server.watch', done);
});
// --------------
// Test.
gulp.task('test.build', function () {
    var src = [(config_1.PATH.src.base + "/**/*.ts"), ("!" + config_1.PATH.src.base + "/bootstrap.ts")];
    return compileTs(src, config_1.PATH.dest.test, true);
});
gulp.task('karma.start', function (done) {
    startKarma();
    done();
});
gulp.task('test.watch', ['test.clean'], function (done) {
    var src = [(config_1.PATH.src.base + "/**/*.ts"), ("!" + config_1.PATH.src.base + "/bootstrap.ts")];
    gulp.watch(src, function () { return runSequence('test.build'); });
    runSequence(['tslint', 'test.build'], function () { return startKarma(false); });
    done();
});
gulp.task('test', ['test.clean'], function (done) {
    return runSequence(['tslint', 'test.build'], 'karma.start', done);
});
// --------------
// Lint.
gulp.task('tslint', function () {
    return lintTs(config_1.PATH.tslint);
});
gulp.task('tslint.watch', ['tslint'], function () {
    return gulp.watch(config_1.PATH.tslint, function (evt) {
        return lintTs(evt.path);
    });
});
// --------------
// Clean.
gulp.task('clean', ['dist.clean', 'test.clean', 'tmp.clean']);
gulp.task('dist.clean', function () {
    return del(config_1.PATH.dest.app.base);
});
gulp.task('test.clean', function () {
    return del(config_1.PATH.dest.test);
});
gulp.task('tmp.clean', function () {
    return del(config_1.PATH.dest.tmp);
});
// --------------
// Postinstall.
gulp.task('npm', function () {
    return shell.task(['npm prune']);
});
gulp.task('tsd', function () {
    return shell.task(['tsd reinstall --clean', 'tsd link', 'tsd rebundle']);
});
gulp.task('postinstall', function (done) {
    return runSequence('clean', 'npm', done);
});
//# sourceMappingURL=gulpfile.js.map