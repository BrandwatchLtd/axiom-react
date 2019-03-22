#!/bin/bash
set -e

# Check if Git status is clean
if [ "$(git diff --exit-code)" ]; then
  echo 'Git status is not clean, stash or commit your changes before publishing.'
  exit 1
fi

# Ensure master is latest
git remote rm upstream &> /dev/null && true
git remote add upstream git@github.com:BrandwatchLtd/axiom-react.git
git checkout master && git fetch upstream && git rebase upstream/master

# Prepare
yarn
yarn build:packages

# Publish
npx lerna publish --npm-client npm --conventional-commits --yes --git-remote upstream
