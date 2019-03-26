#!/usr/bin/env bash
set -e
npx lerna exec --parallel -- rm -rf dist-cjs
npx lerna exec --parallel -- rsync -a --prune-empty-dirs src/* dist-cjs

export BABEL_ENV=test
npx lerna exec --parallel -- npx babel dist-cjs -d dist-cjs
