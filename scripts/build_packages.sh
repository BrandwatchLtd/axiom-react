#!/bin/bash
set -e

DIST_CJS=dist-cjs

npx lerna exec --parallel -- rm -rf $DIST_CJS
npx lerna exec --parallel -- rsync -a --prune-empty-dirs --exclude '__snapshots__/*' --exclude '*.test.js' src/* $DIST_CJS
npx lerna exec --parallel -- BABEL_ENV=production-cjs npx babel $DIST_CJS -d $DIST_CJS

npx postcss packages/**/$DIST_CJS/**/*.css --config ./postcss.prod.config.js --replace --verbose
