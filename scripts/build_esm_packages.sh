#!/bin/bash
set -e

# Prepare
npx lerna exec --parallel -- rm -rf dist

## ESM
npx lerna exec --parallel -- mkdir -p "dist/esm"
npx lerna exec --parallel -- rsync -a --prune-empty-dirs --exclude '__snapshots__/*' --exclude '*.test.js' --exclude '*.stories.js' --exclude '*.stories.mdx' src/* dist/esm
npx lerna exec --parallel -- npx babel dist/esm -d dist/esm --config-file $(pwd)/babel.config.js

# Post CSS
npx postcss 'packages/**/dist/**/*.css' --config ./postcss.prod.config.js --replace --verbose