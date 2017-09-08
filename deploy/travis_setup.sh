#!/usr/bin/env bash
set -e

rm -rf esm tmp
mkdir tmp
rsync -a --prune-empty-dirs --exclude 'example/*' src/* tmp
cp -r tmp esm

NODE_ENV=production BABEL_ENV=production node_modules/.bin/babel tmp --out-dir tmp

NODE_ENV=production BABEL_ENV=production-esm node_modules/.bin/babel esm --out-dir esm
