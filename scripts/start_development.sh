#!/bin/bash
set -e

npx lerna exec --parallel -- "rm -rf dist && ln -s src dist"
npx webpack-dev-server
