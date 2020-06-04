#!/bin/bash
set -e

npx lerna exec --parallel -- "rm -rf dist && mkdir dist && ln -s ../src dist/cjs"
NODE_ENV=development yarn start-storybook --static-dir ./.storybook/static_assets -p 6006
