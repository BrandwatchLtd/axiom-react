#!/bin/bash
set -e

npx lerna exec --parallel -- "rm -rf dist-cjs dist-esm && ln -s src dist"
npx webpack-dev-server
