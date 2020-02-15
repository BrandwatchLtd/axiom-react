#!/bin/bash
set -e

# Prepare
npx lerna exec --parallel -- rm -rf dist

## CJS
npx lerna exec --parallel -- mkdir -p "dist/cjs"
npx lerna exec --parallel -- rsync -a --prune-empty-dirs --exclude '__snapshots__/*' --exclude '*.test.js' src/* dist/cjs
npx lerna exec --parallel -- BABEL_ENV=cjs npx babel dist/cjs -d dist/cjs --config-file $(pwd)/babel.config.js

## ESM
npx lerna exec --parallel -- mkdir -p "dist/esm"
npx lerna exec --parallel -- rsync -a --prune-empty-dirs --exclude '__snapshots__/*' --exclude '*.test.js' src/* dist/esm
npx lerna exec --parallel -- npx babel dist/esm -d dist/esm --config-file $(pwd)/babel.config.js

# Post CSS
npx postcss 'packages/**/dist/**/*.css' --config ./postcss.prod.config.js --replace --verbose

# Flags
yarn build:flags