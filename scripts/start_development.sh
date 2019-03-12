#!/bin/bash
set -e

npx lerna exec --parallel -- "rm -rf dist && ln -s src dist"
npm run build:flags
npx webpack-dev-server
