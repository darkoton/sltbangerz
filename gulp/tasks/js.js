import webpack from "webpack-stream"
import jsImport from 'gulp-js-import';

export const js = () => {
  return app.gulp
  .src(`${app.path.srcFolder}/js/script.js`)
  .pipe(jsImport())
  .pipe(app.gulp.dest(`${app.path.buildFolder}/js`))
  .pipe(app.plugins.browsersync.stream());
}