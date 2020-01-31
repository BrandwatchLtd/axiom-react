#!/usr/bin/env bash
set -e

npx lerna exec --parallel -- rm -rf dist
npx lerna exec --parallel -- rsync -a --prune-empty-dirs src/* dist
npx lerna exec --parallel -- npx babel dist -d dist --config-file $(pwd)/babel.config.js
