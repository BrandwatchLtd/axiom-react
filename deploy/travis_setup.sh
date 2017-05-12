#!/usr/bin/env bash
set -e

rm -rf tmp
mkdir tmp
rsync -a --prune-empty-dirs --exclude 'example/*' src/* tmp
NODE_ENV=production BABEL_ENV=production node_modules/.bin/babel tmp --out-dir tmp
