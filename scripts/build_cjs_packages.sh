#!/bin/bash
set -e

# Prepare
npx lerna exec --parallel -- rm -rf dist/cjs

## CJS
npx lerna exec --parallel -- mkdir -p "dist/cjs"
npx lerna exec --parallel -- rsync -a --prune-empty-dirs --exclude '__snapshots__/*' --exclude '*.test.js' --exclude '*.stories.js' src/* dist/cjs
npx lerna exec --parallel -- BABEL_ENV=cjs npx babel dist/cjs -d dist/cjs --config-file $(pwd)/babel.config.js

# Post CSS
npx postcss 'packages/**/dist/**/*.css' --config ./postcss.prod.config.js --replace --verbose
