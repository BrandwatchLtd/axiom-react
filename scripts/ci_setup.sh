#!/usr/bin/env bash
set -e

DIST_CJS="dist-cjs"
DIST_ESM="dist-esm"

# Prepare
npx lerna exec --parallel -- rm -rf $DIST_CJS $DIST_ESM dist

# Build
yarn build:flags

# CommonJS build
export BABEL_ENV=production-cjs

npx lerna exec --parallel -- rsync -a --prune-empty-dirs src/* $DIST_CJS
npx lerna exec --parallel -- npx babel $DIST_CJS -d $DIST_CJS
npx postcss packages/**/$DIST_CJS/**/*.css --config ./postcss.prod.config.js --replace --verbose

# ES Module build
export BABEL_ENV=production-esm

npx lerna exec --parallel -- rsync -a --prune-empty-dirs src/* $DIST_ESM
npx lerna exec --parallel -- npx babel $DIST_ESM -d $DIST_ESM
npx postcss packages/**/$DIST_ESM/**/*.css --config ./postcss.prod.config.js --replace --verbose
