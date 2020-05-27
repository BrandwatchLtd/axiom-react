#!/bin/bash
set -e

npx lerna exec --parallel -- "rm -rf dist && mkdir dist && ln -s ../src dist/cjs"
yarn start-storybook --docs --static-dir ./.storybook/static_assets -p 6006
