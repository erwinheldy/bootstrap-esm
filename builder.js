import fs from 'node:fs'
import vfs from 'vinyl-fs'
import rename from 'gulp-rename'

const { src, dest } = vfs

if (fs.existsSync('dist'))
  fs.rmSync('dist', { recursive: true })

src('node_modules/bootstrap/js/index.esm.js')
  .pipe(rename('bootstrap.js'))
  .pipe(dest('dist'))
  .pipe(rename('bootstrap.d.ts'))
  .pipe(dest('dist'))

src('node_modules/bootstrap/js/src/**/*')
  .pipe(dest('dist/src'))

src('node_modules/@types/bootstrap/js/dist/**/*')
  .pipe(dest('dist/src'))

src('node_modules/bootstrap/scss/**/*')
  .pipe(dest('scss'))
