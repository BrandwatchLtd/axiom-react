#!/usr/bin/env bash
set -e

# Prepare
npx lerna exec --parallel -- rm -rf dist

## CJS
npx lerna exec --parallel -- mkdir -p "dist/cjs"
npx lerna exec --parallel -- rsync -a --prune-empty-dirs src/* dist/cjs
npx lerna exec --scope @brandwatch/babel-plugin-axiom-imports -- rsync -a --prune-empty-dirs test dist
npx lerna exec --parallel -- BABEL_ENV=cjs npx babel dist/cjs -d dist/cjs --config-file $(pwd)/babel.config.js

