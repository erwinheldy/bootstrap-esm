await Bun.$`rm -rf dist scss`
await Bun.$`cp node_modules/bootstrap/js/index.esm.js dist/bootstrap.js`
await Bun.$`cp node_modules/bootstrap/js/index.esm.js dist/bootstrap.d.ts`
await Bun.$`cp -R node_modules/bootstrap/js/src dist/src`
await Bun.$`cp -R node_modules/@types/bootstrap/js/dist/* dist/src`
await Bun.$`cp -R node_modules/bootstrap/scss scss`
