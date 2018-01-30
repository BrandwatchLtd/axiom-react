#!/usr/bin/env bash
set -e

export NODE_ENV=production
export BABEL_ENV=production

lerna exec --parallel -- rm -rf dist
lerna exec --parallel -- rsync -a --prune-empty-dirs src/* dist
lerna exec --parallel -- babel dist -d dist
