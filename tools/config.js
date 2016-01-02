var argv = require('yargs');
var fs = require('fs');
var CWD = process.cwd();
var pkg = JSON.parse(fs.readFileSync(CWD + "/package.json", 'utf8'));
// --------------
// Configuration.
var ENV = argv['env'] || process.env.profile || 'dev';
process.env.profile = ENV;
exports.PORT = argv['port'] || 5555;
exports.LIVE_RELOAD_PORT = argv['reload-port'] || 4002;
exports.APP_BASE = argv['base'] || '/';
exports.APP_VERSION = pkg.version;
var CLIENT_SRC_BASE = 'client';
var CLIENT_DEST_BASE = 'dist';
exports.LIB_DEST = CLIENT_DEST_BASE + "/lib";
exports.PATH = {
    cwd: CWD,
    tslint: [
        (CLIENT_SRC_BASE + "/**/*.ts"),
        (CWD + "/server/**/*.ts"),
        "tools/**/*.ts",
        "!tools/typings/**",
        (CWD + "/gulpfile.ts")
    ],
    src: {
        base: CLIENT_SRC_BASE,
        deps: [
            { src: 'node_modules/es6-shim/es6-shim.min.js', dest: exports.LIB_DEST, inject: true },
            { src: 'node_modules/systemjs/dist/system-polyfills.js', dest: exports.LIB_DEST },
            { src: 'node_modules/systemjs/dist/system.src.js', dest: exports.LIB_DEST, inject: true },
            { src: 'node_modules/angular2/bundles/angular2-polyfills.js', dest: exports.LIB_DEST, inject: true },
            { src: CLIENT_SRC_BASE + "/system.config.js", dest: exports.LIB_DEST, inject: true },
            { src: 'node_modules/angular2/bundles/angular2.min.js', dest: exports.LIB_DEST, inject: true },
            { src: 'node_modules/angular2/bundles/router.js', dest: exports.LIB_DEST, inject: true },
            { src: 'node_modules/angular2/bundles/http.min.js', dest: exports.LIB_DEST, inject: true },
            { src: 'node_modules/bootstrap/dist/css/bootstrap.min.css', dest: exports.LIB_DEST, inject: true }
        ],
        font: [
            'node_modules/bootstrap/dist/fonts/*'
        ],
        index: CLIENT_SRC_BASE + "/index.html",
        tpl: CLIENT_SRC_BASE + "/components/**/*.html",
        css: [
            (CLIENT_SRC_BASE + "/components/**/*.css"),
        ],
        ts: [
            (CLIENT_SRC_BASE + "/**/*.ts"),
            ("!" + CLIENT_SRC_BASE + "/**/*_spec.ts")
        ]
    },
    dest: {
        app: {
            base: CLIENT_DEST_BASE,
            lib: CLIENT_DEST_BASE + "/lib",
            font: CLIENT_DEST_BASE + "/fonts",
            component: CLIENT_DEST_BASE + "/components"
        },
        test: 'test',
        tmp: '.tmp'
    }
};
exports.DEPS_SRC = exports.PATH.src.deps.map(function (it) { return it.src; });
//# sourceMappingURL=config.js.map