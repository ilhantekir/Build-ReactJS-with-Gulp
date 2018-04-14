const gulp = require("gulp");
const uglify = require("gulp-uglify");
const rename = require("gulp-rename");
const browserify = require("browserify");
const source = require("vinyl-source-stream");
const babelify = require("babelify");
const sass = require('gulp-sass');
const buffer = require('vinyl-buffer')

gulp.task("build:css", function() {
    gulp
      .src("src/scss/**/*.scss")
      .pipe(sass({ outputStyle: "compressed" }).on("error", sass.logError))
      .pipe(rename("style.css"))
      .pipe(gulp.dest("build"));
  });
  
gulp.task("build:js", function() {
  return browserify("src/app.js")
    .transform("babelify", {
      presets: ["es2015", "react"]
    })
    .bundle()
    .pipe(source("main.js"))
    .pipe(buffer())
    .pipe(uglify())
    .pipe(gulp.dest("build"));
});

gulp.task("watch", function() {
  gulp.watch("src/**/*.js", ["build:js"]);
  gulp.watch("src/scss/**/*.scss", ["build:css"]);
});

gulp.task('default', ['watch']);