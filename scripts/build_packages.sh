#!/bin/bash
set -e

# Prepare
npx lerna exec --parallel -- rm -rf dist
npx lerna exec --parallel -- rsync -a --prune-empty-dirs --exclude '__snapshots__/*' --exclude '*.test.js' src/* dist

# Build
yarn build:flags
npx lerna exec --parallel -- npx babel dist -d dist
npx postcss packages/**/dist/**/*.css --config ./postcss.prod.config.js --replace --verbose
