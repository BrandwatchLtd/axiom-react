#!/usr/bin/env bash
set -e

DIST_CJS=dist-cjs

npx lerna exec --parallel -- rm -rf $DIST_CJS
npx lerna exec --parallel -- rsync -a --prune-empty-dirs src/* $DIST_CJS
npx lerna exec --parallel -- BABEL_ENV=test npx babel $DIST_CJS -d $DIST_CJS
