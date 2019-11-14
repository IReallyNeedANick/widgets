const fs = require('fs-extra');
const concat = require('concat');

(async function build() {
  const files = [
    './dist/widgets/runtime-es2015.js',
    './dist/widgets/polyfills-es2015.js',
    './dist/widgets/scripts.js',
    './dist/widgets/main-es2015.js'
  ]

  await fs.ensureDir('elements');

  await concat(files, 'elements/charts.js');

  // await fs.copyFile('./dist/styles.css', 'elements/fr-styles.css');

})()
