#!/bin/bash
set -e

DIST_CJS=dist-cjs
DIST_ESM=dist-esm

CJS_ONLY_PLUGIN_SCOPE="@brandwatch/+(babel*|*lint-config*)"

# CommonJS build
npx lerna exec --parallel -- rsync -a --prune-empty-dirs --exclude '__snapshots__/*' --exclude '*.test.js' src/* $DIST_CJS
npx lerna exec --parallel -- BABEL_ENV=production-cjs npx babel $DIST_CJS -d $DIST_CJS

npx postcss packages/**/$DIST_CJS/**/*.css --config ./postcss.prod.config.js --replace --verbose

# ESM build
npx lerna exec --parallel --ignore $CJS_ONLY_PLUGIN_SCOPE -- rsync -a --prune-empty-dirs --exclude '__snapshots__/*' --exclude '*.test.js' src/* $DIST_ESM
npx lerna exec --parallel --ignore $CJS_ONLY_PLUGIN_SCOPE -- BABEL_ENV=production-esm npx babel $DIST_ESM -d $DIST_ESM

npx postcss packages/**/$DIST_ESM/**/*.css --config ./postcss.prod.config.js --replace --verbose
